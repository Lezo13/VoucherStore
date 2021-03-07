import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './../../../core/services/orderService/SelectVoucher.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
  @Input() totalPrice: number;
  rows: Array<object> = [];

  headers: Array<string> = ['#', 'Voucher Name', 'Quantity', 'Price', 'Amount'];

  constructor(public activeModal: NgbActiveModal, private data: DataService) {
    this.rows = null;
    this.rows = [];
    let iterateNum: number = 0;

    this.data.orderlist.forEach(element => {
      iterateNum += 1;
      const feedData: object = {
        '#': iterateNum,
        'Voucher Name': element.voucherName,
        Quantity: element.itemQty,
        Price: element.itemPrice,
        Amount: element.itemPrice * element.itemQty
      };
      this.rows.push(feedData);
    });
  }

  ngOnInit(): void {
    this.totalPrice = this.data.totalPrice;
  }

  CheckOut(): void {
    if (this.data.totalPrice === 0) {

      // this.activeModal.close('Close click');
    } else {

    }
  }
}
