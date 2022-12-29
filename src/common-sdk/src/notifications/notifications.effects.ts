import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NotificationsData } from '@assistant/data';
import { notificationAdd, notificationAddError, notificationAddSuccess, notificationsLoad, notificationsLoadError, notificationsLoadSuccess, notificationPatch, notificationPatchError, notificationPatchSuccess } from './notifications.actions';
import { UserSelector } from '../user/user.selector';
import { Notification } from './notifications.model';
import { guid } from '../common';

@Injectable({ providedIn: 'root' })
export class NotificationsEffects {

    load$ = createEffect(() => this.actions$.pipe(
        ofType(notificationsLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId]) => this.notificationsData.all$(userId)
            .pipe(
                map(notifications => notificationsLoadSuccess({ notifications })),
                catchError(() => of(notificationsLoadError()))
            ))
    ));

    add$ = createEffect(() => this.actions$.pipe(
        ofType(notificationAdd),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([action, userId]) => {
            const notification: Notification = { id: guid(), date: new Date(), ...action.notification };
            return this.notificationsData.add$(userId, notification).pipe(
                map(() => notificationAddSuccess({ notification })),
                catchError(() => of(notificationAddError()))
            )
        })
    ));

    patch$ = createEffect(() => this.actions$.pipe(
        ofType(notificationPatch),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([action, userId]) => this.notificationsData.patch$(userId, action.id, action.notification)
            .pipe(
                map(() => notificationPatchSuccess({ ...action })),
                catchError(() => of(notificationPatchError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private notificationsData: NotificationsData,
        private userSelector: UserSelector
    ) { }
}
