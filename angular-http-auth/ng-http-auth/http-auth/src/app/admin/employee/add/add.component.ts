import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private auth_service: AuthService, private form_builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+$")
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+$")
      ]],
      workPhone: ['', [
        Validators.required,
      ]],
      mobileNumber: ['', [
        Validators.required
      ]],
      bloodGroup: ['', [
        Validators.required
      ]],
      jobDesc: ['', [
        Validators.required
      ]],
      expertise: ['', [
        Validators.required
      ]],
      aboutme: ['', [
        Validators.required
      ]],
      location: ['', [
        Validators.required
      ]],
      department: ['', [
        Validators.required
      ]],
      isActive: [true],
    });
  }

  get employee_add_form() {
    return this.form.controls;
  }

  addEmployee() {
    this.auth_service.addEmployee(this.form.value).subscribe(add_data => {
      if (add_data.result) {
        console.log(add_data);
        this.ngOnInit();
        alert("Employee Added");
      }
    })
  }
}
