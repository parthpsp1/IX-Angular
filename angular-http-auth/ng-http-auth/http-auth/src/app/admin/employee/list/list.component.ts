import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private auth_service: AuthService, private router: Router) { }

  employee_data: any = [{}];

  ngOnInit(): void {
    this.auth_service.getEmployeeDataFromSwagger().subscribe(data => {
      this.employee_data = data.result;
    });
  }
  deleteEmployee(id: number) {
    this.auth_service.deleteEmployee(id).subscribe(delete_data => {
      this.ngOnInit();
    })
  }
  editEmployee(id: number) {
    this.router.navigate([`admin/employee/edit/${id}`]);
  }

}
