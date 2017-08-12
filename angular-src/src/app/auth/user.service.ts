import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user';
import { ApiService } from '../api.service';

@Injectable()
export class UserService {

  constructor(private api: ApiService) { }

  registerUser(user: User): Observable<User> {
    return this.api.registerUser(user);
  }

  loginUser(user: User): Observable<User> {
    return this.api.loginUser(user);
  }

  setAuthToken(user: User) {
    localStorage.setItem('x-auth', user.tokens[0].token);
    console.log(this.getToken());    
  }

  getToken() {
    return localStorage.getItem('x-auth');
  }

}
