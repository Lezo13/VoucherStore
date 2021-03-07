import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CanShowConfirmationForm implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkOrderPage(url);
    }

    checkOrderPage(url: string): boolean {
        if (this.router.url === '/orderform') {
            return true;
        }
        alert('Cannot access this site!');
        this.router.navigate(['home']);
        return false;
    }
}
