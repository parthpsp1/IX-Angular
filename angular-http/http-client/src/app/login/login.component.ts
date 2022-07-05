import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private routelink: Router) { }

  ngOnInit(): void {
  }

  onClickRoute() {
    this.routelink.navigate(['dashboard']);
  }
}
