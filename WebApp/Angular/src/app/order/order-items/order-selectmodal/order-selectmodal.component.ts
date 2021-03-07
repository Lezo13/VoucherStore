import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';

@Component({
selector: 'app-order-selectmodal',
templateUrl: './order-selectmodal.component.html',
styleUrls: ['./order-selectmodal.component.scss']
})
export class OrderSelectmodalComponent implements OnInit {
@Input() itemName: string;
message: string;

constructor(public activeModal: NgbActiveModal, private data: DataService) {}

ngOnInit(): void {
this.data.currentMessage.subscribe(message => this.message = message);
}

PlaceOrder(inputQty: HTMLInputElement): void {

if (inputQty.value.length === 0 || inputQty.valueAsNumber === 0) {
inputQty.classList.add('textBox--error');
inputQty.placeholder = 'Please input a value';
setTimeout(() => {  inputQty.classList.remove('textBox--error'), inputQty.placeholder = ''; }, 1000)
;
} else {

const convNumberInput: number =  inputQty.valueAsNumber;
this.data.currentQty = convNumberInput;
this.data.cartNumber += 1;
this.data.totalPrice += this.data.currentPrice * convNumberInput;

this.data.pushOrder();

this.data.changeToBtnRemove();
this.activeModal.close('Close click');

}

}

}
