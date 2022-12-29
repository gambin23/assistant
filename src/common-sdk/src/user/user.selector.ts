import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppStore } from '../store/store';

const userState = createSelector((state: AppStore) => state.user, x => x);
export const selectUser = createSelector(userState, x => x.data);
export const selectIsBusy = createSelector(userState, x => x.isBusy);

@Injectable({ providedIn: 'root' })
export class UserSelector {

    constructor(private store: Store<AppStore>) { }

    isBusy$ = () => this.store.select(selectIsBusy);
    user$ = () => this.store.select(selectUser);
    userId$ = () => this.store.select(selectUser).pipe(map(x => x.id));
    userName$ = () => this.store.select(selectUser).pipe(map(x => x.name));
    userSubscription$ = () => this.store.select(selectUser).pipe(map(x => x.subscriptionType));
    isAdmin$ = () => this.store.select(selectUser).pipe(map(x => x.subscriptionType === 'admin'));
}
