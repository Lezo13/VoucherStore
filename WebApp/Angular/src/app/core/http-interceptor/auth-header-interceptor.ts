import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SpinnerService } from './../services/SpinnerService/spinner.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {}

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
                    }
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.resetSpinner();
                    throw error;
                }
            )
        );
    }
}
