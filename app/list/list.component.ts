import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('parentData') tableData: any;

  delRow(i: any) {
    this.tableData.splice(i, 1);
  }

  @Output() editForm: any = new EventEmitter();

  editData: any;

  editUser(event: any) {
    this.editData = [];
    this.editData = event;
    this.editForm.emit(this.editData);
  }

}

