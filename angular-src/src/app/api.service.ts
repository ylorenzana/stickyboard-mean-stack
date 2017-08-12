import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';
import { User } from './auth/user';
import { Sticky } from './stickies/sticky';

const API_URL = environment.apiUrl;

@Injectable()

export class ApiService {

  constructor(private http: Http) {}

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public registerUser (user: User): Observable<User> {
    return this.http.post(API_URL + '/users', user)
      .map((response) => {
        const user = response.json();
        localStorage.setItem('x-auth', user.tokens[0].token);
        return new User(user);
      }).catch(this.handleError);
  }
  
  public loginUser (user: User): Observable<User> {
    return this.http.post(API_URL + '/users/login', user)
      .map((response) => {
        const user = response.json();
        localStorage.setItem('x-auth', user.tokens[0].token);
        return new User(user);
      }).catch(this.handleError);
  }

  public logoutUser (): Observable<any> {
    const authToken = localStorage.getItem('x-auth');    
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.delete(API_URL + '/users/me/token', {headers})
      .map((response) => localStorage.removeItem('x-auth'))
      .catch(this.handleError);
  }

  public getStickies (): Observable<Sticky[]> {
    const authToken = localStorage.getItem('x-auth');
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.get(API_URL + '/stickies', {headers})
      .map((response) => {
        const stickies = response.json().stickies;
        return stickies.map((sticky) => new Sticky(sticky));
      }).catch(this.handleError);
  }

  public createSticky (sticky: Sticky): Observable<Sticky> {
    const authToken = localStorage.getItem('x-auth');    
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.post(API_URL + '/stickies', sticky, {headers})
      .map((response) => {
        return new Sticky(response.json());
      }).catch(this.handleError);
  }

  public updateSticky (sticky: Sticky): Observable<Sticky> {
    const authToken = localStorage.getItem('x-auth');    
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.patch(API_URL + '/stickies/' + sticky._id, sticky, {headers})
      .map((response) => {
        return new Sticky(response.json());
      }).catch(this.handleError);
  }

  public deleteStickyById (stickyId): Observable<null> {
    const authToken = localStorage.getItem('x-auth');    
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.delete(API_URL + '/stickies/' + stickyId, {headers})
      .map((response) => null)
      .catch(this.handleError);
  }

  public deleteAllStickies (): Observable<null> {
    const authToken = localStorage.getItem('x-auth');    
    const headers = new Headers();
    headers.append('x-auth', authToken);
    return this.http.delete(API_URL + '/stickies', {headers})
      .map((response) => null)
      .catch(this.handleError);
  }
}
