import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinnerStatus: boolean = false;
  private count: number = 0;
  private spinner$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }

  requestStarted(): void {
    if (++this.count === 1) {
      this.spinnerStatus = true;
      this.spinner$.next('start');
    }
  }

  requestEnded(): void {
    if (this.count === 0 || --this.count === 0) {
      this.spinnerStatus = false;
      this.spinner$.next('stop');
    }
  }

  resetSpinner(): void {
    this.count = 0;
    this.spinner$.next('stop');
  }
}