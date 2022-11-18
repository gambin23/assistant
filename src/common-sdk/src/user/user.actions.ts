import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { User } from './user.model';

export const userLogin = createAction('[USER] Login', props<{ user: User }>());
export const userLogout = createAction('[USER] Logout');

@Injectable({providedIn: "root"})
export class UserActions {
    constructor(private store: Store) { }

    login(user: User) {
        this.store.dispatch(userLogin({ user }));
    }
}
