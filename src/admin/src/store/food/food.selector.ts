import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '@assistant/common-sdk';
import { userSkeleton, usersSkeleton } from '@assistant/admin/models';

@Injectable({ providedIn: 'root' })
export class FoodSelector {

    usersSubject$ = new BehaviorSubject(usersSkeleton);
    userSubject$ = new BehaviorSubject<User | undefined>(userSkeleton);
    isBusySubject$ = new BehaviorSubject(true);

    users$ = () => this.usersSubject$.asObservable();
    user$ = () => this.userSubject$.asObservable();
    isBusy$ = () => this.isBusySubject$.asObservable();
}
