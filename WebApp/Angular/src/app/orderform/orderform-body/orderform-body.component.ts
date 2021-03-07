import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../app.component';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderform-body',
  templateUrl: './orderform-body.component.html',
  styleUrls: ['./orderform-body.component.scss']
})

export class OrderformBodyComponent implements OnInit {
  validatingForm: FormGroup;
  clickedFlag: Boolean = false;

  constructor(private _http: HttpClient) { }

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

 
  if (senderName.valid && senderEmail.valid && recipientName.valid && recipientEmail) {
    this.clickedFlag = true;

    const url: string = 'api/place_order';

    this._http.post(url, {
      SenderName: senderName.value,
      SenderEmail: senderEmail.value,
      RecipientName: recipientName.value,
      RecipientEmail: recipientEmail.value,
      Dedication: dedication.value
    }).toPromise().then((data: any) => {
      console.log(data);
    });

  }

  else {
    this.validatingForm.markAllAsTouched();
    }
  }

}
