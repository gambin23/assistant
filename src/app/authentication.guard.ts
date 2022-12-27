import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Authentication } from '@assistant/data';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private authentication: Authentication
    ) { }

    canLoad(): Observable<boolean | UrlTree> {
        return this.authentication.isAuthenticated$.pipe(map(isAuthenticated =>
            isAuthenticated ? true : this.router.createUrlTree(['login'])
        ));
    }

    canActivate(): Observable<boolean | UrlTree> {
        return this.authentication.isAuthenticated$.pipe(map(isAuthenticated =>
            isAuthenticated ? true : this.router.createUrlTree(['login'])
        ));
    }
}
