import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/orderService/SelectVoucher.service';
import { Observable } from 'rxjs';

import { SpinnerService } from './../services/SpinnerService/spinner.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private _toastrService: ToastrService, private router: Router,
    private _data: DataService) {}

    // tslint:disable-next-line: no-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url === 'api/place_order') {
        this.spinnerService.requestStarted();

        }
        return this.handler(next, request);
    }

    // tslint:disable-next-line: no-any
    handler(next: HttpHandler, request: HttpRequest<any>): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        if (this.spinnerService.spinnerStatus && event.status >= 200 && event.status <= 202) {
                            this.spinnerService.requestEnded();
                            this._data.resetService();
                            this._toastrService.success('The order has been placed!', 'PURCHASE COMPLETED', {
                            timeOut: 2000});
                            setTimeout(() => { this.router.navigate(['home'])
                            .then(() => {
                                window.location.reload();
                            }); }, 1900);

                        }

                    }
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.resetSpinner();
                    try {
                        if (this.spinnerService.spinnerStatus && error.status === 500) {
                            this._data.resetService();
                            this._toastrService.error("An error occured on the server's side. "
                            + 'You may have entered an unrecognized service email', 'PURCHASE INCOMPLETE',  {
                                timeOut: 2000
                            });
                            setTimeout(() => { this.router.navigate(['order'])
                            .then(() => {
                                window.location.reload();
                            }); }, 1900);

                        }

                    } catch (e) {
                        if (this.spinnerService) {
                        this._data.resetService();
                        this._toastrService.error(e, 'Error Occurred', {
                            timeOut: 2000});
                        setTimeout(() => { this.router.navigate(['order'])
                            .then(() => {
                                window.location.reload();
                            }); }, 1900);
                        }

                    }
                    throw error;
                }
            )
        );
    }
}
