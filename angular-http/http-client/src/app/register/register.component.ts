import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private routelink: Router, private authservice: AuthService, private form_builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get details_form() {
    return this.form.controls;
  }

  submitForm() {
    this.authservice.registerDetails(this.form.value);
    //console.log(this.form.value);
  }
}
