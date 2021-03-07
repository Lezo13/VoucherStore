import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './../../../../../../../Voucher-Shop-Front-End-/Frontend-Seed/src/app/core/services/orderService/SelectVoucher.service';
import { SpinnerService } from './../services/SpinnerService/spinner.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private _toastrService: ToastrService, private router: Router,
    private _data: DataService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.spinnerService.requestStarted();
    return this.handler(next, request);
    }

    handler(next, request) {
        return next.handle(request)
        .pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        this.spinnerService.requestEnded();
                        if (event.status >= 200 && event.status <= 202) {
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
                        if (error.status === 500) {
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
                        this._data.resetService();
                        this._toastrService.error(e, 'Error Occurred', {
                            timeOut: 2000});
                        setTimeout(() => { this.router.navigate(['order'])
                            .then(() => {
                                window.location.reload();
                            }); }, 1900);

                    }
                    throw error;
                }
            )
        );
    }
}
