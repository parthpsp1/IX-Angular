import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private routelink: Router, private form_builder: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z0-9@_]+$")]
      ],
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(99),
        Validators.pattern(/^[A-Za-z0-9@]{8,10}$/)
      ]]
    })
  }

  registerFormDetails() {
    this.authservice.registerDetails(this.form.value).subscribe(val => {
      if (val.result) {
        alert("Registration Successful");
        this.routelink.navigate(['login']);
      }
    },
      err => {
        alert("Cannot Register");
      }
    );
  }

  get registration_form() {
    return this.form.controls;
  }
}
