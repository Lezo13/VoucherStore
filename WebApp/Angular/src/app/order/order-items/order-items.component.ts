import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';

import { OrderSelectmodalComponent } from './order-selectmodal/order-selectmodal.component';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
  orders: Array<string> = [];

  constructor(private modalService: NgbModal, private data: DataService) {}
  ngOnInit(): void {
  }

  openModal(event): void  {

    let targetElement: any;

    if (event.target.type === 'button') {
      targetElement = event.target;

    } else {
      targetElement = event.target.parentElement.parentElement;
    }

    this.data.btn = targetElement;
    const voucherName: string = targetElement.previousElementSibling.previousElementSibling.outerText;
    const voucherPrice: string = targetElement.previousElementSibling.childNodes[1].outerText;

    if (targetElement.name === 'select') {
      this.data.currentVoucherName = voucherName;
      this.data.currentPrice = +(voucherPrice);
      const modalRef: NgbModalRef = this.modalService.open(OrderSelectmodalComponent);
      modalRef.componentInstance.name = 'World';
      const convPrice: number = +(voucherPrice.replace('$', ''));
      this.data.currentPrice = convPrice;
      (modalRef.componentInstance as OrderSelectmodalComponent).itemName = this.data.currentVoucherName;
    } else if (targetElement.name === 'remove') {
      this.data.changeToBtnSelect();
      this.data.decreaseCartCount();
      const voucherIndex: number = this.data.orderlist.findIndex(x => x.voucherName === voucherName);
      const storedPrice: number = this.data.orderlist[voucherIndex].itemPrice * (this.data.orderlist[voucherIndex].itemQty);
      this.data.decreasePrice(storedPrice);
      this.data.orderlist.splice(this.data.orderlist.findIndex(x => x.voucherName === voucherName), 1);
    }

  }

}
