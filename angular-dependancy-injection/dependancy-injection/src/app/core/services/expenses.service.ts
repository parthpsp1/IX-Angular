import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  expense_service: any = []

  addExpenses(pushData: any) {
    this.expense_service.push(pushData);
  }

  deleteEntry(id: number) {
    this.expense_service.splice(id, 1);

  }
}
