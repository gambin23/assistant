import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserSelector } from '@assistant/common-sdk';
import { CalendarData } from '@assistant/food/data';
import { calendarLoad, calendarLoadError, calendarLoadSuccess } from './calendar.actions';

@Injectable()
export class CalendarEffects {
    loadRecipes$ = createEffect(() => this.actions$.pipe(
        ofType(calendarLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId]) => this.calendarData.all$(userId)
            .pipe(
                map(calendar => calendarLoadSuccess({ calendar })),
                catchError(() => of(calendarLoadError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private calendarData: CalendarData,
        private userSelector: UserSelector
    ) { }
}
