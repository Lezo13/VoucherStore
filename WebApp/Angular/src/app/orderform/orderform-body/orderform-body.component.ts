import { SpinnerService } from 'src/app/core/services/SpinnerService/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';

import { ApiService } from './../../core/services/api.service';

@Component({
  selector: 'app-orderform-body',
  templateUrl: './orderform-body.component.html',
  styleUrls: ['./orderform-body.component.scss']
})

export class OrderformBodyComponent implements OnInit {
  validatingForm: FormGroup;
  clickedFlag: Boolean = false;

  constructor(private _data: DataService, private _http: HttpClient, private _apiCall: ApiService, private _spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      sendername: new FormControl(null, [Validators.required]),
      senderemail: new FormControl(null, [Validators.required, Validators.email]),
      recipientname: new FormControl(null, [Validators.required]),
      recipientemail: new FormControl(null, [Validators.required, Validators.email]),
      dedication: new FormControl(null, [])
    });

  }

  get GetInputSenderName(): AbstractControl {return this.validatingForm.get('sendername'); }
  get GetInputSenderEmail(): AbstractControl {return this.validatingForm.get('senderemail'); }
  get GetInputRecipientName(): AbstractControl {return this.validatingForm.get('recipientname'); }
  get GetInputRecipientEmail(): AbstractControl {return this.validatingForm.get('recipientemail'); }

  SubmitOrder(): void {
  const senderName: AbstractControl = this.validatingForm.get('sendername');
  const senderEmail: AbstractControl = this.validatingForm.get('senderemail');
  const recipientName: AbstractControl = this.validatingForm.get('recipientname');
  const recipientEmail: AbstractControl = this.validatingForm.get('recipientemail');
  const dedication: AbstractControl = this.validatingForm.get('dedication');
  const totalSpent: number = this._data.totalPrice;

  if (senderName.valid && senderEmail.valid && recipientName.valid && recipientEmail) {

    this.clickedFlag = true;
    this._apiCall.placeOrder(senderName, senderEmail, recipientName, recipientEmail, dedication, totalSpent);

    } else {
    this.validatingForm.markAllAsTouched();

    }

  }
}
