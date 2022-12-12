import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Alert } from './alert.model';

export const alertAdd = createAction('[ALERT] Add', props<{ alert: Alert }>());
export const alertSuccess = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'success' } });
export const alertError = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'error' } });
export const alertWarning = (message: string, link?: string, isPersistent?: boolean) => alertAdd({ alert: { message, link, isPersistent, type: 'warning' } });

export const alertClear = createAction('[ALERT] Clear');

@Injectable({ providedIn: 'root' })
export class AlertActions {

    constructor(private store: Store) { }

    success = (message: string, link?: string) => this.store.dispatch(alertSuccess(message, link));
    error = (message: string, link?: string) => this.store.dispatch(alertError(message, link));
    warning = (message: string, link?: string) => this.store.dispatch(alertWarning(message, link));
    clear = () => this.store.dispatch(alertClear());
}
