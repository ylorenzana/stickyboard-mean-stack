import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'sb-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('x-auth');
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const user = new User({email: this.loginForm.value.email, password: this.loginForm.value.password});
    this.userService.loginUser(user)
      .subscribe((user) => {
        if (user.email) {
          this.router.navigate(['']);
        }
      });
  }
}
