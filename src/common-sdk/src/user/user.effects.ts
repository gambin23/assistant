import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersData } from '@assistant/data';
import { userRegister, userRegisterError, userLogin, userLoginError, userLoginSuccess } from './user.actions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserEffects {

    register$ = createEffect(() => this.actions$.pipe(
        ofType(userRegister),
        mergeMap(action => this.usersData.add$(action.user)
            .pipe(
                map(() => userLogin({ id: action.user.id })),
                catchError(() => of(userRegisterError()))
            ))
    ));

    login$ = createEffect(() => this.actions$.pipe(
        ofType(userLogin),
        mergeMap(action => this.usersData.get$(action.id)
            .pipe(
                map(user => {
                    this.usersData.patch$(action.id, { lastLoginDate: new Date() });
                    return userLoginSuccess({ user: user! })
                }),
                catchError(() => of(userLoginError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private usersData: UsersData,
        private router: Router
    ) { }
}
