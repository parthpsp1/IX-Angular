import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private token: TokenService) { }

  registerDetails(register_data: string) {
    return this.httpclient.post<any>("https://tech-resources-core-api.azurewebsites.net/Register", register_data)
  }
  loginDetails(register_data: string) {
    return this.httpclient.post<any>("https://tech-resources-core-api.azurewebsites.net/Login", register_data)
  }
  getDataFromJSONPlaceholder(): Observable<any> {
    const placeholder_url = "https://jsonplaceholder.typicode.com/users";
    return this.httpclient.get(placeholder_url);
  }
  getEmployeeDataFromSwagger(): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token.getToken()}` }
    const swagger_employee_url = "https://tech-resources-core-api.azurewebsites.net/Employee";
    return this.httpclient.get(swagger_employee_url, { headers });
  }
  getEmployeeWorkDataFromSwagger(): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token.getToken()}` }
    const swagger_employee_work_url = "https://tech-resources-core-api.azurewebsites.net/Employee";
    return this.httpclient.get(swagger_employee_work_url, { headers });
  }
  addEmployee(data: string): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token.getToken()}` }
    const swagger_employee_url = "https://tech-resources-core-api.azurewebsites.net/Employee";
    return this.httpclient.post(swagger_employee_url, data, { headers });
    //Method changed to post instead of get to perform addition of employees. URL is same
  }
  updateEmployee(data: string): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token.getToken()}` }
    const swagger_employee_url = "https://tech-resources-core-api.azurewebsites.net/Employee";
    return this.httpclient.put(swagger_employee_url, data, { headers });
    //Method changed to put to perform updation of employees. URL is same
  }
  deleteEmployee(id: number): Observable<any> {
    const headers = { Authorization: `Bearer ${this.token.getToken()}` }
    const swagger_employee_url = `https://tech-resources-core-api.azurewebsites.net/Employee/${id}`;
    return this.httpclient.delete(swagger_employee_url, { headers });
  }
}
