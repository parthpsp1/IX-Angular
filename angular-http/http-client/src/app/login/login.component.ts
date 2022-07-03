import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private routelink: Router, private form_builder: FormBuilder, private auth_service: AuthService) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  password_missing = "Password is required.";
  username_missing = "Username is required.";



  onClickRoute() {
    this.auth_service.loginDetails(this.form.value).subscribe(result => {
      alert("Login Successful");
      this.routelink.navigate(['dashboard']);
    })
  }

  get details_form() {
    return this.form.controls;
  }

}
