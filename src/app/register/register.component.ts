import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error = false;
  constructor(public registerService: RegisterService, public router: Router) {}

  ngOnInit(): void {}

  auth() {
    this.registerService
      .auth(this.email, this.password)
      .then((response) => {
        this.error = false;
        this.errorMessage = '';
        this.router.navigate(['login']);
      })
      .catch((error) => {
        this.errorMessage = error;
        this.error = true;
      });
  }
}
