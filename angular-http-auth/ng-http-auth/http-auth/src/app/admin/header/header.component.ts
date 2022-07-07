import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private token_service: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteToken() {
    this.token_service.deleteToken();
    this.router.navigate(['login']);
  }
}
