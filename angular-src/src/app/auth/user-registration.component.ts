import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'sb-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['../app.component.css', './user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('x-auth');
    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const user = new User({email: this.registrationForm.value.email, password: this.registrationForm.value.password});
    this.userService.registerUser(user)
      .subscribe((user) => {
        if (user.email) {
          this.router.navigate(['']);
        }
      });
  }
}
