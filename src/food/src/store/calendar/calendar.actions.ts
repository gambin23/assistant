import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Calendar } from '@assistant/food/models';
import { calendarDate } from './calendar.functions';

const prefix = '[CALENDAR]';
export const calendarLoad = createAction(`${prefix} Load`);
export const calendarLoadSuccess = createAction(`${prefix} Success`, props<{ calendar: Calendar[] }>());
export const calendarLoadError = createAction(`${prefix} Error`);
export const calendarUpdateDay = createAction(`${prefix} Day Update`, props<{ day: Calendar }>());

@Injectable({ providedIn: 'root' })
export class CalendarActions {
    constructor(private store: Store) { }

    load = () => this.store.dispatch(calendarLoad());
    loadSuccess = (calendar: Calendar[]) => this.store.dispatch(calendarLoadSuccess({ calendar }));
    loadError = () => this.store.dispatch(calendarLoadError());
    updateDay = (day: Calendar) => this.store.dispatch(calendarUpdateDay({ day }));
}
