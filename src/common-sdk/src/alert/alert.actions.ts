import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Alert } from './alert.model';

export const alertAdd = createAction('[ALERT] Add', props<{ alert: Alert }>());
export const alertAddSuccess = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'success' } });
export const alertAddError = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'error' } });
export const alertAddWarning = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'warning' } });

export const alertRemove = createAction('[ALERT] Remove', props<{ alert: Alert }>());
export const alertClear = createAction('[ALERT] Clear');

@Injectable({ providedIn: 'root' })
export class AlertActions {

    constructor(private store: Store) { }

    success = (message: string, link?: string) => this.store.dispatch(alertAddSuccess(message, link));
    error = (message: string, link?: string) => this.store.dispatch(alertAddError(message, link));
    warning = (message: string, link?: string) => this.store.dispatch(alertAddWarning(message, link));
    remove = (alert: Alert) => this.store.dispatch(alertRemove({ alert }));
    clear = () => this.store.dispatch(alertClear());
}
