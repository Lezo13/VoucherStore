import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { OrderCartComponent } from './order-cart/order-cart.component';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss']
})
export class OrderHeaderComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private router: Router, public _data: DataService, private modalService: NgbModal) {

  }

  goToPage(pageName: string): void {
    this._data.resetService();
    this.router.navigate([`${pageName}`]);
  }

  openModal(event): void  {
    const modalRef: NgbModalRef = this.modalService.open(OrderCartComponent);
    modalRef.componentInstance.name = 'World';
  }
}
