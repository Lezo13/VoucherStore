import { FindOrdersService } from 'src/app/core/services/FindOrdersService/findorders.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-orderlist-top',
  templateUrl: './orderlist-top.component.html',
  styleUrls: ['./orderlist-top.component.scss']
})
export class OrderlistTopComponent implements OnInit {

  constructor(private _apiCall: ApiService, private _data: FindOrdersService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async SearchOrders(inputEmail: string) {
    // tslint:disable-next-line: typedef
    const ordersData = await this._apiCall.getOrders(inputEmail);
    let iterateNum: number = 0;
    this._data.rows = null;
    this._data.rows = [];
    ordersData.forEach(element => {
      iterateNum += 1;
      const feedData: object = {

        '#': iterateNum,
        'Date Ordered': element.orderDate,
        'Order #': element.orderNo,
        'Total Spent': element.totalSpent,
        'Sender Email': element.senderEmail,
        'Sender Name': element.senderName,
        'Recipient Email': element.recipientEmail,
        'Recipient Name': element.recipientName,
        Dedication: element.dedication
      };
      this._data.rows.push(feedData);

    });

  }

}
