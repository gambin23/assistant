import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { User } from './user.model';

export const userLogin = createAction('[USER] Login', props<{ id: string }>());
export const userLoginSuccess = createAction('[USER] Login Success', props<{ user: User }>());
export const userLoginError = createAction('[USER] Login Error');
export const userRegister = createAction('[USER] Register', props<{ id: string, user: User }>());
export const userRegisterError = createAction('[USER] Register Error');

export const userLogout = createAction('[USER] Logout');

@Injectable({ providedIn: "root" })
export class UserActions {
    constructor(private store: Store) { }

    login(id: string) {
        this.store.dispatch(userLogin({ id }));
    }

    register(id: string, user: User) {
        this.store.dispatch(userRegister({ id, user }));
    }

    logout() {
        this.store.dispatch(userLogout());
    }
}
