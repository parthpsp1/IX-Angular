import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloodGroup } from '../blood-group';
import { MaritalStatus } from '../marital-status';
import { TSize } from '../t-size';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  tSizecomp = TSize;
  blood_groups = BloodGroup;
  marital_status = MaritalStatus;
  current_year = new Date();
  user_age: number = 0;
  asterisk = "*";
  form_title = "Details Form";
  form_data: string = '';
  date = new Date().toISOString().slice(0, 10);
  form: FormGroup = new FormGroup({});

  constructor(private form_builder: FormBuilder) {
  }
  ngOnInit(): void {
    this.form = this.form_builder.group({
      employee_number: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
      middle_name: ['', [Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z]+$")]],
      department: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[a-zA-Z0-9 ]+$")]],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[a-zA-Z0-9 ]+$")]],
      work_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      salary_revision_due_on: ['',],
      date_of_joining: ['', [Validators.required]],
      mobile_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      address: ['', [Validators.minLength(2), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      other_email: ['', [Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      tags: ['', [Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[a-zA-Z ,_.@]+$")]],
      birth_date: [''],
      current_t_size: [''],
      marital_status: [''],
      blood_group: [''],
      age: ['', [Validators.maxLength(2), Validators.pattern("^(18?[1-9]|[1-9][0-9]|[1][1-9][1-9]|99)$")]],
      job_description: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      about_me: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      ask_me_about_expertise: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      present_address: ['', [Validators.minLength(10), Validators.maxLength(99), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      residence_phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      work_experiance: this.form_builder.array([])
    });
  }





  get addFields() {
    return this.form.controls["work_experiance"] as FormArray;
  }

  addRow() {
    this.addFields.push(this.form_builder.group({
      previous_company: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("^[a-zA-Z0-9_.-]*$")]],
      job_title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z]+$")]],
      from_date: ['', [Validators.required]],
      to_date: ['', [Validators.required]],
      job_description: ['', [Validators.pattern("^[a-zA-Z_.-]*$")]],
      relevance: ['']
    }));
  }

  calculateAge() {
    let dob = new Date(this.form.value.birth_date);
    let year = dob.getFullYear();
    let current_year_value = this.current_year.getFullYear()
    this.user_age = current_year_value - year;
  }

  submitForm() {
    this.form.value.age = this.user_age;
    console.log(this.form.value);
  }

  get details_form() {
    return this.form.controls;
  }
}
