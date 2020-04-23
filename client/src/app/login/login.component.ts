import { Component, OnInit } from '@angular/core';
import { LoginServiceService as LoginService } from './login-service.service';
import { User } from './../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      console.log('username: ', this.user.username);
      console.log('password: ', this.user.password);
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('Result: ', result);
        if (result['status'] === 'success') {
          localStorage.setItem('loggedInUser', this.user.username);
          this.router.navigate(['/home']);
        } else {
          console.log('Wrong username or password');
        }
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
