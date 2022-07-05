import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Output() sendData = new EventEmitter();
  employee: any = [{
    firstname: '',
    lastname: '',
    email: ''
  }]

  @Input() editArray: any = [] = this.employee;

  update() {
    if (this.editArray.firstname) {
      this.editArray.firstname = this.employee.firstname;
    }
    if (this.editArray.lastname) {
      this.editArray.lastname = this.employee.lastname;
    }
    if (this.editArray.email) {
      this.editArray.email = this.employee.email;
    }
  }

  new_emp_arr: any = [];
  addDetails() {
    this.new_emp_arr.push(this.employee);
    this.sendData.emit(this.new_emp_arr);
    this.employee = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
