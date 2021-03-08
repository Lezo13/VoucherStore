import { FindOrdersService } from 'src/app/core/services/FindOrdersService/findorders.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-orderlist-table',
  templateUrl: './orderlist-table.component.html',
  styleUrls: ['./orderlist-table.component.scss']
})
export class OrderlistTableComponent implements OnInit {

  headers: Array<string> = ['#', 'Date Ordered', 'Order #', 'Total Spent',
                            'Sender Email', 'Sender Name', 'Recipient Email', 'Recipient Name', 'Dedication'];
  constructor(public _data: FindOrdersService) {}

  ngOnInit(): void {
  }

}
