import { Component, OnInit } from '@angular/core';
import { LoginServiceService as LoginService } from './login-service.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      console.log('username: ', this.user.username);
      console.log('password: ', this.user.password);
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('Result: ', result);
      }, error => {
        console.log('Error: ', error);
      });
    } else {
      alert('Töltsön ki minden mezőt!!!');
    }
  }

  ngOnInit() {
  }

}
