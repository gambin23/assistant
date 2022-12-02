import { createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { foodStore } from '../store';
import { Calendar, CalendarDay, calendarDaySkeleton, calendarSkeleton } from '../../models/calendar';
import { selectRecipesIsBusy } from '../recipes/recipes.selector';

export const selectCalendarState = createSelector(foodStore, x => x.calendar);
const selectCalendarIsBusy = createSelector(selectCalendarState, x => x.isBusy);
const selectCalendarRecipesIsBusy = createSelector(selectCalendarIsBusy, selectRecipesIsBusy, (calendar, recipes) => calendar || recipes);
const selectCalendar = () => createSelector(selectCalendarState, x => x.isBusy ? calendarSkeleton : x.data);
const selectDay = (id: string) => createSelector(selectCalendarState, x => x.isBusy ? calendarDaySkeleton : x.data[id] || {});

@Injectable()
export class CalendarSelector {

    constructor(private store: Store) { }

    calendar$(): Observable<Calendar> {
        return this.store.select(selectCalendar());
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectCalendarRecipesIsBusy);
    }

    day$(id: string): Observable<CalendarDay> {
        return this.store.select(selectDay(id));
    }
}
