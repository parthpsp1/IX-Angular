import { Component, OnInit, } from '@angular/core';
import { ExpensesService } from '../core/services/expenses.service';


@Component({
  selector: 'expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {

  constructor(private exp: ExpensesService) { }

  // total_expenses_of_january: number = 0;
  // total_expenses_of_february: number = 0;
  // total_expenses_of_march: number = 0;
  // total_expenses_of_april: number = 0;
  // total_expenses_of_may: number = 0;
  // total_expenses_of_june: number = 0;
  // total_expense =
  //   this.total_expenses_of_january +
  //   this.total_expenses_of_february +
  //   this.total_expenses_of_march +
  //   this.total_expenses_of_april +
  //   this.total_expenses_of_may +
  //   this.total_expenses_of_june;
  total_expense = 0;
  current_year: number = 2022;
  //array_of_month = [0, 1, 2, 3, 4, 5];
  onlySign = "/-";
  web_hint = "! Add an Expense to get started.";
  getDataArray: any =
    {
      expense_title: '',
      expense_date: '',
      expense_amount: ''
    }

  months = [
    {
      id: 0,
      month: "January",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_january
    },
    {
      id: 1,
      month: "February",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_february
    },
    {
      id: 2,
      month: "March",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_march
    },
    {
      id: 3,
      month: "April",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_april
    },
    {
      id: 4,
      month: "May",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_may
    },
    {
      id: 5,
      month: "June",
      total: 0
      //expenseForThatMonth: this.total_expenses_of_june
    }];

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
  deleteExpense(loop: number) {
    let month = new Date(this.expenses[loop].expense_date).getMonth();
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].id == month) {
        this.months[i].total = this.months[i].total - this.expenses[loop].expense_amount;
      }
    }
    if (this.total_expense) {
      this.total_expense -= this.expenses[loop].expense_amount;
      console.log(this.total_expense);
    }
    this.exp.deleteExpense(loop);
  }
  // if (id == 0) {
  //   this.months[0].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }
  // else if (id == 1) {
  //   this.months[1].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }
  // else if (id == 2) {
  //   this.months[2].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }
  // else if (id == 3) {
  //   this.months[3].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }
  // else if (id == 4) {
  //   this.months[4].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }
  // else if (id == 5) {
  //   this.months[5].expenseForThatMonth -= this.expenses[id].expense_amount;
  // }

  calculateTotalExpenses() {
    this.total_expense += this.getDataArray.expense_amount;
  }

  ngOnInit(): void {
    this.expenses = this.exp.expense_service;
  }

  checkMonthAddExpense() {
    let month = new Date(this.getDataArray.expense_date).getMonth();
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].id == month) {
        this.months[i].total += this.getDataArray.expense_amount;
      }
    }

    // if (month == 0) {
    //   this.months[0].expenseForThatMonth += this.getDataArray.expense_amount
    // }
    // else if (month == 1) {
    //   this.months[1].expenseForThatMonth += this.getDataArray.expense_amount
    // }
    // else if (month == 2) {
    //   this.months[2].expenseForThatMonth += this.getDataArray.expense_amount
    // }
    // else if (month == 3) {
    //   this.months[3].expenseForThatMonth += this.getDataArray.expense_amount
    // }
    // else if (month == 4) {
    //   this.months[4].expenseForThatMonth += this.getDataArray.expense_amount
    // }
    // else if (month == 5) {
    //   this.months[5].expenseForThatMonth += this.getDataArray.expense_amount
    // }
  }

  display = 'none';
  //Experimental Modal Starts here
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }

}
