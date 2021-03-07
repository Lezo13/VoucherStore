import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

constructor(private _http: HttpClient) { }

placeOrder(senderName, senderEmail , recipientName, recipientEmail, dedication, totalSpent): void  {
    const url: string = 'api/place_order';
    this._http.post(url, {
        SenderName: senderName.value,
        SenderEmail: senderEmail.value,
        RecipientName: recipientName.value,
        RecipientEmail: recipientEmail.value,
        Dedication: dedication.value,
        TotalSpent: totalSpent
    }).toPromise().then((data: any) => {console.log(data); });
  }

getOrders(senderEmail): any  {
    const url: string = 'api/display_order';
    var result = [];
    this._http.post(url, { SenderEmail: senderEmail }).toPromise().then((data: any) => {data.data.forEach(element => {
        result.push(element);
    }); });
    return result;
    }
}
