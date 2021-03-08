import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

constructor(private _http: HttpClient) { }

placeOrder(senderName: AbstractControl, senderEmail: AbstractControl , recipientName: AbstractControl,
        recipientEmail: AbstractControl, dedication: AbstractControl, totalSpent: number): void  {
        const url: string = 'api/place_order';
        this._http.post(url, {
            SenderName: senderName.value,
            SenderEmail: senderEmail.value,
            RecipientName: recipientName.value,
            RecipientEmail: recipientEmail.value,
            Dedication: dedication.value,
            TotalSpent: totalSpent
    }).toPromise();
  }

    async getOrders(senderEmail: string): Promise<any>  {
    const url: string = 'api/display_order';
    const result: Array<object> = new Array<object>();

    await this._http.post(url, { SenderEmail: senderEmail }).toPromise().then((data: any) => {data.data.forEach(element => {
        const record: object = {
            orderDate: element.orderDate,
            orderNo: element.orderNo,
            totalSpent: element.totalSpent,
            senderEmail: element.senderEmail,
            senderName: element.senderName,
            recipientEmail: element.recipientEmail,
            recipientName: element.recipientName,
            dedication: element.dedication
          };
        result.push(record);
    }); });
    return result;
    }
}
