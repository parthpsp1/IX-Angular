import { Component, OnInit } from '@angular/core';
import { TokenService } from '../core/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private token: TokenService) { }

  ngOnInit(): void {
  }

}
