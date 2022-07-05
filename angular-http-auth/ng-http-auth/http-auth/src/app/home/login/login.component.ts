import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private routelink: Router, private form_builder: FormBuilder, private auth_service: AuthService) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  loginFormDetails() {
    this.auth_service.loginDetails(this.form.value).subscribe(val => {
      alert("Logged In");
      this.routelink.navigate(['dashboard']);
    });;
  }
}
