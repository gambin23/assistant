import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Notification } from './notifications.model';


export const notificationsLoad = createAction('[NOTIFICATIONS] Load');
export const notificationsLoadSuccess = createAction('[NOTIFICATIONS] Load Success', props<{ notifications: Notification[] }>());
export const notificationsLoadError = createAction('[NOTIFICATIONS] Load Error');

export const notificationsAdd = createAction('[NOTIFICATIONS] Add', props<{ notification: Notification }>());



@Injectable({ providedIn: 'root' })
export class NotificationsActions {

    constructor(private store: Store) { }

    load = () => this.store.dispatch(notificationsLoad());
    add = (notification: Notification) => this.store.dispatch(notificationsAdd({ notification }));
}
