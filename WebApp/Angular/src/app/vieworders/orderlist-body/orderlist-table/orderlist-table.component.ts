import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orderlist-table',
  templateUrl: './orderlist-table.component.html',
  styleUrls: ['./orderlist-table.component.scss']
})
export class OrderlistTableComponent implements OnInit {
  rows: Array<object> = [];

  headers: Array<string> = ['#', 'Order Date', 'Total Spent', 'Sender Email', 'Sender Name',
                            'Recipient Email', 'Recipient Name', 'Dedication'];

  constructor() {
    this.rows = null;
    this.rows = [];
    let iterateNum: number = 0;

  }

  ngOnInit(): void {
  }

  
}
