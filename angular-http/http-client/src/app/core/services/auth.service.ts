import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginData } from '../interfaces/auth_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  registerDetails(register_data: string) {
    return this.http.post<any>("https://tech-resources-core-api.azurewebsites.net/Register", register_data)
      .subscribe(val => {
        alert("Registration Successful");
        this.route.navigate(['login']);
      });
  }
  loginDetails(register_data: string) {
    return this.http.post<any>("https://tech-resources-core-api.azurewebsites.net/Login", register_data);
  }
}
