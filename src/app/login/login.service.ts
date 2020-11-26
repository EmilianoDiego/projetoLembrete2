import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private HttpLogin: HttpClient) {}

  auth(email: string, password: string): Promise<object> {
    return new Promise((resolve, reject) => {
      const login: Login = {
        email,
        password,
      };
      this.HttpLogin.post<Login>('http://localhost:3000/auth', login).subscribe(
        (response) => {
          console.log('response', response);
          resolve(response);
        },
        (errorResponse) => {
          console.log('error', errorResponse.error);
          reject(errorResponse.error);
        }
      );
    });
  }
}
