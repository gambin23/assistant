import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Authentication } from '@assistant/firestore';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private authentication: Authentication
    ) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.authentication.isAuthenticated$.pipe(map(user => {
            return user ? true : this.router.createUrlTree(['login']);
        }));
    }
}
