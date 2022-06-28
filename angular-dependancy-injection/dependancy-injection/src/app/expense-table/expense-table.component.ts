import { Component, OnInit, } from '@angular/core';
import { ExpensesService } from '../core/services/expenses.service';


@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {

  constructor(private exp: ExpensesService) { }

  exepense_month_january: number = 0;
  exepense_month_february: number = 0;
  exepense_month_march: number = 0;
  exepense_month_april: number = 0;
  exepense_month_may: number = 0;
  exepense_month_june: number = 0;
  // totalExpense =
  //   this.exepense_month_january +
  //   this.exepense_month_february +
  //   this.exepense_month_march +
  //   this.exepense_month_april +
  //   this.exepense_month_may +
  //   this.exepense_month_june;
  totalExpense = 0;
  current_year: number = 2022;
  //array_of_month = [0, 1, 2, 3, 4, 5];
  //min_dates_for_entry: any = 2022 - 01 - 01;
  onlySign = "/-";
  web_hint = "Add an expense to get started.";
  getDataArray: any =
    {
      expense_title: '',
      expense_date: '',
      expense_amount: ''
    }

  expenses: { expense_title: string; expense_date: Date; expense_amount: number }[] = [];

  addExpensesApp() {
    if (this.getDataArray.expense_title == '') {
      alert("Expense Name Cannot Be Empty!");
      return
    }
    else if (this.getDataArray.expense_date == '') {
      alert("Expense Date Cannot Be Empty!");
      return
    }
    else if (this.getDataArray.expense_amount == '') {
      alert("Expense Amount Cannot Be Empty!");
      return;
    }
    else {
      let add: any =
      {
        expense_title: this.getDataArray.expense_title,
        expense_date: this.getDataArray.expense_date,
        expense_amount: this.getDataArray.expense_amount
      }
      this.exp.addExpenses(add);
    }
  }

  resetForm() {
    this.getDataArray = [];
  }
  deleteEntry(id: number) {
    if (this.exepense_month_january) {
      this.exepense_month_january = this.exepense_month_january - this.expenses[id].expense_amount;
    }
    else if (this.exepense_month_february) {
      this.exepense_month_february = this.exepense_month_february - this.expenses[id].expense_amount;
    }
    else if (this.exepense_month_march) {
      this.exepense_month_march = this.exepense_month_march - this.expenses[id].expense_amount;
    }
    else if (this.exepense_month_april) {
      this.exepense_month_april = this.exepense_month_april - this.expenses[id].expense_amount;
    }
    else if (this.exepense_month_may) {
      this.exepense_month_may = this.exepense_month_may - this.expenses[id].expense_amount;
    }
    else if (this.exepense_month_june) {
      this.exepense_month_june = this.exepense_month_june - this.expenses[id].expense_amount;
    }
    if (this.totalExpense) {
      this.totalExpense -= this.expenses[id].expense_amount;
      console.log(this.totalExpense);
    }
    this.exp.deleteEntry(id);
  }

  calculateTotalExpenses() {
    this.totalExpense = this.totalExpense + this.getDataArray.expense_amount;
  }

  ngOnInit(): void {
    this.expenses = this.exp.expense_service;
  }

  new: any = this.exp.expense_service;

  checkMonthAddExpense() {
    let date = new Date(this.getDataArray.expense_date).getMonth();
    console.log(date);
    if (date == 0) {
      this.exepense_month_january = this.exepense_month_january + this.getDataArray.expense_amount
    }
    else if (date == 1) {
      this.exepense_month_february = this.exepense_month_february + this.getDataArray.expense_amount
    }
    else if (date == 2) {
      this.exepense_month_march = this.exepense_month_march + this.getDataArray.expense_amount
    }
    else if (date == 3) {
      this.exepense_month_april = this.exepense_month_april + this.getDataArray.expense_amount
    }
    else if (date == 4) {
      this.exepense_month_may = this.exepense_month_may + this.getDataArray.expense_amount
    }
    else if (date == 5) {
      this.exepense_month_june = this.exepense_month_june + this.getDataArray.expense_amount
    }
  }
}
