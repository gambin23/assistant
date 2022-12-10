import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { FOOD_APP } from '@assistant/food/name';
import { combineLatest, mergeMap, Observable } from 'rxjs';
import { eachDayOfInterval, endOfISOWeek, startOfISOWeek } from 'date-fns';
import { Calendar } from '@assistant/food/models';
import { FoodStore } from '../store';
import { calendarDaySkeleton, calendarSkeleton } from '../../models/calendar';
import { selectRecipesIsBusy } from '../recipes/recipes.selector';
import { calendarDate } from './calendar.functions';

export const selectCalendarState = createSelector(createFeatureSelector<FoodStore>(FOOD_APP.id), x => x.calendar);
const selectCalendarIsBusy = createSelector(selectCalendarState, x => x.isBusy);
const selectCalendarRecipesIsBusy = createSelector(selectCalendarIsBusy, selectRecipesIsBusy, (calendar, recipes) => calendar || recipes);
const selectCalendar = () => createSelector(selectCalendarState, x => x.isBusy ? calendarSkeleton : x.data);
const selectDay = (id: string) => createSelector(selectCalendarState, x => x.isBusy ? calendarDaySkeleton : x.data.find(x => x.id === id) || { id });

@Injectable({ providedIn: 'root' })
export class CalendarSelector {

    constructor(private store: Store) { }

    calendar$(): Observable<Calendar[]> {
        return this.store.select(selectCalendar());
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectCalendarRecipesIsBusy);
    }

    day$(id: string | Date): Observable<Calendar> {
        return this.store.select(selectDay(calendarDate(id)));
    }

    week$(id: string | Date): Observable<Calendar[]> {
        id = new Date(id);
        return combineLatest([...eachDayOfInterval({ start: startOfISOWeek(id), end: endOfISOWeek(id) }).map(day =>
            this.store.select(selectDay(calendarDate(day)))
        )]);
    }
}
