import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist-header',
  templateUrl: './orderlist-header.component.html',
  styleUrls: ['./orderlist-header.component.scss']
})
export class OrderlistHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}
