import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private route: Router) { }

  registerDetails(register_data: string) {
    return this.httpclient.post<any>("https://tech-resources-core-api.azurewebsites.net/Register", register_data)
  }
  loginDetails(register_data: string) {
    return this.httpclient.post<any>("https://tech-resources-core-api.azurewebsites.net/Login", register_data)
  }
}
