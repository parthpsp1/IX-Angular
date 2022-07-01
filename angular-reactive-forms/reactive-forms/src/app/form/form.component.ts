import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TSize } from '../t-size';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  tSizecomp = TSize;
  t_size_array: any = [];
  public t_sizes = Object.values(this.tSizecomp).filter(value => typeof value === 'string');


  constructor(private form_builder: FormBuilder) {
    this.t_size_array = Object.keys(this.tSizecomp);
  }
  ngOnInit(): void {
    console.log(this.tSizecomp)
  }

  asterisk = "*";
  form_title = "Details Form";
  form_data: string = '';

  form = this.form_builder.group({
    employee_number: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
    first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    middle_name: ['', [Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    department: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z]+$")]],
    work_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    salary_revision_due_on: ['',],
    date_of_joining: ['', [Validators.required]],
    mobile_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    address: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    other_email: ['', [Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
    tags: ['', [Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
    birth_date: [''],
    current_t_size: [''],
    marital_status: [''],
    blood_group: [''],
    age: ['', [Validators.pattern("^(?:1[01][0-9]|99|1[7-9]|[2-9][0-9])$")]],
    job_description: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    about_me: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    ask_me_about_expertise: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    present_address: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
    residence_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
  });


  work_exp_table = this.form_builder.group({
    previous_company: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z]+$")]],
    job_title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z]+$")]],
    form_date: ['', [Validators.required]],
    to_date: ['', [Validators.required]],
    job_description: [''],
    relevance: ['']
  });


  submitForm() {
    alert("Submit Working");
    console.warn(this.form.value);
  }

  get details_form() {
    return this.form.controls;
  }
}
