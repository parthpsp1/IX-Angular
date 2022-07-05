import { Component, OnInit } from '@angular/core';
import { ExpensesService } from './core/services/expenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private exp: ExpensesService) { }
  title = 'Dependancy Injection';
  ngOnInit() {
  }
}
