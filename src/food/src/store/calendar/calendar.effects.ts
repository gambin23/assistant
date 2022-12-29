import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserSelector } from '@assistant/common-sdk';
import { CalendarData } from '@assistant/food/data';
import { calendarLoad, calendarLoadError, calendarLoadSuccess, calendarPatch, calendarPatchError, calendarPatchSuccess } from './calendar.actions';

@Injectable({ providedIn: 'root' })
export class CalendarEffects {
    load$ = createEffect(() => this.actions$.pipe(
        ofType(calendarLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId]) => this.calendarData.all$(userId)
            .pipe(
                map(calendar => calendarLoadSuccess({ calendar })),
                catchError(() => of(calendarLoadError()))
            ))
    ));

    patch$ = createEffect(() => this.actions$.pipe(
        ofType(calendarPatch),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([action, userId]) => this.calendarData.patch$(userId, action.id, action.day)
            .pipe(
                map(() => calendarPatchSuccess({ ...action })),
                catchError(e => {console.log(e);return of(calendarPatchError())})
            ))
    ));

    constructor(
        private actions$: Actions,
        private calendarData: CalendarData,
        private userSelector: UserSelector
    ) { }
}
