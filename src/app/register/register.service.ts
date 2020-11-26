import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private HttpRegister: HttpClient) {}

  auth(email: string, password: string): Promise<object> {
    return new Promise((resolve, reject) => {
      const register: Register = {
        email,
        password,
      };
      this.HttpRegister.post<Register>('http://localhost:3000/user', register).subscribe(
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
