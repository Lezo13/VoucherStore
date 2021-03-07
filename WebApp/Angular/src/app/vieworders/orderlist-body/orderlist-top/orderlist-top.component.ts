import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-orderlist-top',
  templateUrl: './orderlist-top.component.html',
  styleUrls: ['./orderlist-top.component.scss']
})
export class OrderlistTopComponent implements OnInit {

  constructor(private _apiCall: ApiService) { }

  ngOnInit(): void {
  }

  SearchOrders(inputEmail) {
    console.log(inputEmail);
    var data = this._apiCall.getOrders(inputEmail);
    console.log(data);
  }

}
