import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FindOrdersService {

rows: Array<object> = [];

messageSource: BehaviorSubject<string> = new BehaviorSubject('default message');
currentMessage: Observable<string> = this.messageSource.asObservable();

constructor() { }

changeMessage(message: string): void {
    this.messageSource.next(message);
  }

}
