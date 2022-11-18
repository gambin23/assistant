import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/store';
import { User } from './user.model';

export const selectUser = (state: AppState) => state.user;
export const selectUserId = createSelector(selectUser, x => x.id);
export const selectUserName = createSelector(selectUser, x => x.name);


@Injectable()
export class UserSelector {

    constructor(private store: Store<AppState>) { }

    user$(): Observable<User> {
        return this.store.select(state => state.user);
    }

    isLoggedIn$(): Observable<boolean> {
        return this.userId$().pipe(map(x => !!x));
    }

    userId$(): Observable<string | undefined> {
        return this.user$().pipe(map(x => x.id));
    }

    userName$(): Observable<string | undefined> {
        return this.user$().pipe(map(x => x.name));
    }
}
