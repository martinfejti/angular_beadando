import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user.model';

@Injectable()
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }

  validateLogin(user: User) {
    console.log('service - username: ', user.username, 'password: ', user.password);
    return this.httpClient.post('http://localhost:4000/api/user/login', {
      username: user.username,
      password: user.password
    });
    // first param is the url where we post data to
    // second param is the body
  }
}
