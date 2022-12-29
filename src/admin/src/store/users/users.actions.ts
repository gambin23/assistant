import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';
import { AdminUsersData } from '@assistant/admin/data';
import { userSkeleton, usersSkeleton } from '@assistant/admin/models';
import { UsersSelector } from './users.selector';

@Injectable({ providedIn: 'root' })
export class UsersActions {

    constructor(
        private usersSelector: UsersSelector,
        private usersData: AdminUsersData
    ) { }

    search = (search?: string) => {
        this.usersSelector.isBusySubject$.next(true);
        this.usersSelector.usersSubject$.next(usersSkeleton);

        this.usersData.search$(search).pipe(
            first(),
            map(users => {
                this.usersSelector.usersSubject$.next(users);
                this.usersSelector.isBusySubject$.next(false);
            })
        ).subscribe();
    }

    get = (id: string) => {
        this.usersSelector.isBusySubject$.next(true);
        this.usersSelector.userSubject$.next(userSkeleton);
        this.usersData.get$(id).pipe(
            first(),
            map(user => {
                this.usersSelector.userSubject$.next(user);
                this.usersSelector.isBusySubject$.next(false);
            })
        ).subscribe();
    }
}
