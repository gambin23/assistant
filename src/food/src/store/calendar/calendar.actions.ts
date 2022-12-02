import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Calendar, CalendarDay } from '../../models/calendar';

const prefix = '[CALENDAR]';
export const calendarLoad = createAction(`${prefix} Load`);
export const calendarLoadSuccess = createAction(`${prefix} Success`, props<{ calendar: Calendar }>());
export const calendarLoadError = createAction(`${prefix} Error`);
export const calendarUpdateDay = createAction(`${prefix} Day Update`, props<{ id: string, day: Partial<CalendarDay> }>());

@Injectable({ providedIn: "root" })
export class CalendarActions {
    constructor(private store: Store) { }

    load() {
        this.store.dispatch(calendarLoad());
    }

    loadSuccess(calendar: Calendar) {
        this.store.dispatch(calendarLoadSuccess({ calendar }));
    }

    loadError() {
        this.store.dispatch(calendarLoadError());
    }
    updateDay(id: string, day: Partial<CalendarDay>) {
        this.store.dispatch(calendarUpdateDay({ id, day }))
    }
}
