import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

constructor(private _http: HttpClient) { }

placeOrder(senderName, senderEmail ,recipientName, recipientEmail, dedication, totalSpent): void  {
    const url: string = 'api/place_order';
    this._http.post(url, {
        SenderName: senderName.value,
        SenderEmail: senderEmail.value,
        RecipientName: recipientName.value,
        RecipientEmail: recipientEmail.value,
        Dedication: dedication.value,
        TotalSpent: totalSpent
    }).toPromise().then((data: any) => {console.log(data)});
  }

}
