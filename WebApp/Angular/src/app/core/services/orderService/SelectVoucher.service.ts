import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderItem } from 'src/app/_shared/models/orderitem.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
  orderlist: Array<OrderItem> = new Array<OrderItem>();
  cartNumber: number = 0;
  btn: HTMLButtonElement;
  currentVoucherName: string = '';
  currentQty: number = 0;
  currentPrice: number = 0;
  totalPrice: number = 0;
  messageSource: BehaviorSubject<string> = new BehaviorSubject('default message');
  currentMessage: Observable<string> = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string): void {
    this.messageSource.next(message);
  }

  changeToBtnSelect(): void {
    this.btn.name = 'select';
    this.btn.firstChild.textContent = 'SELECT';
    this.btn.classList.remove('red');
    this.btn.classList.remove('accent-2');
    this.btn.classList.add('amber');
    this.btn.classList.add('darken-3');
  }

  changeToBtnRemove(): void {
    this.btn.name = 'remove';
    this.btn.firstChild.textContent = `REMOVE (${this.currentQty})`;
    this.btn.classList.remove('amber');
    this.btn.classList.remove('darken-3');
    this.btn.classList.add('red');
    this.btn.classList.add('accent-2');
  }

  pushOrder(): void {

    const orders: OrderItem = {
      voucherName: this.currentVoucherName,
      itemPrice: this.currentPrice,
      itemQty: this.currentQty
    };

    const items: OrderItem = new OrderItem();
    items.voucherName = this.currentVoucherName;
    items.itemPrice = this.currentPrice;
    items.itemQty = this.currentQty;
    this.orderlist.push(items);
  }

  decreaseCartCount(): void {
    this.cartNumber -= 1;
  }

  decreasePrice(priceToDecrease: number): void {
    this.totalPrice -= priceToDecrease;
  }

  resetService(): void {
    this.orderlist = new Array<OrderItem>();
    this.cartNumber = 0;
    this.btn = null;
    this.currentVoucherName = '';
    this.currentQty = 0;
    this.currentPrice = 0;
    this.totalPrice = 0;
    this.messageSource = new BehaviorSubject('default message');
    this.currentMessage = this.messageSource.asObservable();
  }
}
