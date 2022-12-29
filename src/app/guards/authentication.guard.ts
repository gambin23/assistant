import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Authentication } from '@assistant/data';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private authentication: Authentication
    ) { }

    canLoad = (): Observable<boolean | UrlTree> => this.guard();
    canActivate = (): Observable<boolean | UrlTree> => this.guard();

    private guard = () => this.authentication.isAuthenticated$.pipe(map(isAuthenticated =>
        isAuthenticated ? true : this.router.createUrlTree(['login'])
    ));
}
