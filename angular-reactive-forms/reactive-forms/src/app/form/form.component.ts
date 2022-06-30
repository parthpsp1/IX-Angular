import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private form_builder: FormBuilder) { }
  ngOnInit(): void {
  }

  asterisk = "*";
  form_title = "Details Form";
  form_data: string = '';

  form = this.form_builder.group({
    employee_number: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
    first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    middle_name: ['', [Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    department: [''],
    location: [''],
    work_phone: [''],
    salary_revision_due_on: [''],
    date_of_joining: [''],
    mobile_phone: [''],
    address: [''],
    other_email: [''],
    tags: [''],
    birth_date: [''],
    current_t_size: [''],
    marital_status: [''],
    blood_group: [''],
    age: [''],
    job_description: [''],
    about_me: [''],
    ask_me_about_expertise: [''],
    present_address: [''],
    residence_phone: [''],
  })

  submitForm() {
    alert("Submit Working");
    console.warn(this.form.value);
  }

  get p() {
    return this.form.controls;
  }
}
