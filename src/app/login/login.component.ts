import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error = false;
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegister() {
    this.router.navigate(['register'])
  }

  auth() {
    this.loginService.auth(this.email, this.password)
      .then(response => {
        this.error = false;
        this.errorMessage = '';
        localStorage.setItem("token", 'ok');
        this.router.navigate([''])
      })
      .catch(error => {
        this.errorMessage = error;
        this.error = true;
      })
  }

}
