import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, filter, map } from 'rxjs';
import { alertAdd, alertClear } from './alert.actions';

@Injectable()
export class AlertEffects {

    add$ = createEffect(() => this.actions$.pipe(
        ofType(alertAdd),
        filter(x => !x.alert.isPersistent),
        delay(5000),
        map(() => alertClear())
    ));

    constructor(private actions$: Actions) { }
}
