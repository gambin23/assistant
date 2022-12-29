import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, filter, map } from 'rxjs';
import { alertAdd, alertRemove } from './alert.actions';

@Injectable({ providedIn: 'root' })
export class AlertEffects {

    add$ = createEffect(() => this.actions$.pipe(
        ofType(alertAdd),
        filter(action => !action.alert.isPersistent),
        delay(5000),
        map(action => alertRemove({ ...action }))
    ));

    constructor(private actions$: Actions) { }
}
