import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private routelink: Router, private form_builder: FormBuilder, private auth_service: AuthService, private token_service: TokenService) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z0-9@_]*$")
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  loginFormDetails() {
    this.auth_service.loginDetails(this.form.value).subscribe(val => {
      if (val.result) {
        alert("Logged In");
        this.token_service.setToken(val.result);
        this.routelink.navigate(['admin/dashboard']);
      }
    },
      err => {
        alert("Invalid Login Details");
      }
    );
  }

  get login_form() {
    return this.form.controls;
  }
}
