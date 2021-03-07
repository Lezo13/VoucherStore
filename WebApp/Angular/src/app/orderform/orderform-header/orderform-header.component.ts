import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';

@Component({
  selector: 'app-orderform-header',
  templateUrl: './orderform-header.component.html',
  styleUrls: ['./orderform-header.component.scss']
})
export class OrderformHeaderComponent implements OnInit {

  constructor(private router: Router, public _data: DataService) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
    this._data.resetService();
  }

}
