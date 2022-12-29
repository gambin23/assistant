import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { UserSelector } from '@assistant/common-sdk';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {

    constructor(
        private router: Router,
        private userSelector: UserSelector
    ) { }

    canLoad(): Observable<boolean | UrlTree> {
        return this.userSelector.isAdmin$().pipe(map(isAdmin =>
            isAdmin ? true : this.router.createUrlTree([''])
        ));
    }
}
