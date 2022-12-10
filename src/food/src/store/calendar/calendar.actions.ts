import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Calendar } from '@assistant/food/models';

const prefix = '[FOOD] CALENDAR -';
export const calendarLoad = createAction(`${prefix} Load`);
export const calendarLoadSuccess = createAction(`${prefix} Load Success`, props<{ calendar: Calendar[] }>());
export const calendarLoadError = createAction(`${prefix} Load Error`);
export const calendarPatch = createAction(`${prefix} Patch`, props<{ id: string, day: Partial<Calendar> }>());
export const calendarPatchSuccess = createAction(`${prefix} Patch Success`, props<{ id: string, day: Partial<Calendar> }>());
export const calendarPatchError = createAction(`${prefix} Patch Error`);

@Injectable({ providedIn: 'root' })
export class CalendarActions {
    constructor(private store: Store) { }

    load = () => this.store.dispatch(calendarLoad());
    loadSuccess = (calendar: Calendar[]) => this.store.dispatch(calendarLoadSuccess({ calendar }));
    loadError = () => this.store.dispatch(calendarLoadError());
    patch = (id: string, day: Partial<Calendar>) => this.store.dispatch(calendarPatch({ id, day }));
    patchSuccess = (id: string, day: Partial<Calendar>) => this.store.dispatch(calendarPatch({ id, day }));
    patchError = () => this.store.dispatch(calendarLoadError());
}
