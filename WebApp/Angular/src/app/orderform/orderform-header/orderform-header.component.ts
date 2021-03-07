import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderform-header',
  templateUrl: './orderform-header.component.html',
  styleUrls: ['./orderform-header.component.scss']
})
export class OrderformHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);

  }

}
