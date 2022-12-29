import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { UserSelector } from '@assistant/common-sdk';
import { combineLatest, filter, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {

    constructor(
        private router: Router,
        private userSelector: UserSelector
    ) { }

    canLoad(): Observable<boolean | UrlTree> {
        return combineLatest([this.userSelector.isBusy$(), this.userSelector.isAdmin$()]).pipe(
            filter(([isBusy, _]) => !isBusy),
            map(isAdmin => isAdmin ? true : this.router.createUrlTree(['']))
        );
    }
}
