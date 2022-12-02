import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { calendarLoad, calendarLoadError, calendarLoadSuccess } from './calendar.actions';
import { CalendarService } from './calendar.service';

@Injectable()
export class CalendarEffects {
    loadRecipes$ = createEffect(() => this.actions$.pipe(
        ofType(calendarLoad),
        mergeMap(() => this.calendarService.getAll$()
            .pipe(
                delay(1000),
                map(calendar => calendarLoadSuccess({calendar})),
                catchError(() => of(calendarLoadError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private calendarService: CalendarService
    ) { }
}
