import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { notificationsLoad, notificationsLoadError, notificationsLoadSuccess } from './notifications.actions';
import { notificationsSkeleton } from './notifications.model';

@Injectable()
export class NotificationsEffects {

    load$ = createEffect(() => this.actions$.pipe(
        ofType(notificationsLoad),
        mergeMap(() => of(notificationsSkeleton)
            .pipe(
                delay(1000),
                map(notifications => notificationsLoadSuccess({notifications})),
                catchError(() => of(notificationsLoadError()))
            ))
    ));

    constructor(private actions$: Actions) { }
}
