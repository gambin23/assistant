import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserSelector } from '@assistant/common-sdk';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private userSelector: UserSelector
    ) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.userSelector.isAuthenticated$().pipe(map(isAuthenticated => {
            return isAuthenticated ? true : this.router.createUrlTree(['login']);
        }));
    }
}
