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
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  registerFormDetails() {
    this.authservice.registerDetails(this.form.value).subscribe(val => {
      alert("Registration Successful");
      this.routelink.navigate(['home/login']);
    });;
  }

}
