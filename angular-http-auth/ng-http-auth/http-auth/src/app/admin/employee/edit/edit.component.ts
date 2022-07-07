import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  url_id!: any;
  employee_data: any = [];

  constructor(private auth_service: AuthService, private form_builder: FormBuilder, private activated_route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.form_builder.group({
      id: [''],
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
      isActive: [true]
    });

    this.url_id = this.activated_route.snapshot.paramMap.get("id");
    //console.log(this.url_id);
    this.getEmployeeData();
  }

  get employee_update_form() {
    return this.form.controls;
  }

  upadateEmployee() {
    this.auth_service.updateEmployee(this.form.value).subscribe(update_data => {
      if (update_data.result) {
        console.log(update_data);
        alert("Employee Updated");
      }
    })
  }
  getEmployeeData() {
    this.auth_service.getEmployeeDataFromSwagger().subscribe(get_emp_data => {
      this.employee_data = get_emp_data.result;
      // console.log("I am getting this employee data:", this.employee_data);
      for (let i = 0; i < this.employee_data.length; i++) {
        // console.log("Employee madhla ID", this.employee_data[i].id);
        if (this.url_id == this.employee_data[i].id) {
          this.form.controls['id'].patchValue(this.employee_data[i].id);
          this.form.controls['firstName'].patchValue(this.employee_data[i].firstName);
          this.form.controls['lastName'].patchValue(this.employee_data[i].lastName);
        }
      }
    })
  }
}
