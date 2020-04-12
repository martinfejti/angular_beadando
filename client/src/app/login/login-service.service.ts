import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }

  validateLogin(user: User) {
    return this.httpClient.post('/api/user/login', {
      username: user.username,
      password: user.password
    });
    // first param is the url where we post data to
    // second param is the body
  }
}
