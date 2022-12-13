import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Notification, NotificationBase } from './notifications.model';


export const notificationsLoad = createAction('[NOTIFICATIONS] Load');
export const notificationsLoadSuccess = createAction('[NOTIFICATIONS] Load Success', props<{ notifications: Notification[] }>());
export const notificationsLoadError = createAction('[NOTIFICATIONS] Load Error');

export const notificationAdd = createAction('[NOTIFICATIONS] Add', props<{ notification: NotificationBase }>());
export const notificationAddSuccess = createAction('[NOTIFICATIONS] Add Success', props<{ notification: Notification }>());
export const notificationAddError = createAction('[NOTIFICATIONS] Add Error');

export const notificationPatch = createAction('[NOTIFICATIONS] Patch', props<{ id: string, notification: Partial<Notification> }>());
export const notificationPatchSuccess = createAction('[NOTIFICATIONS] Patch Success', props<{ id: string, notification: Partial<Notification> }>());
export const notificationPatchError = createAction('[NOTIFICATIONS] Patch Error');

@Injectable({ providedIn: 'root' })
export class NotificationsActions {

    constructor(private store: Store) { }

    load = () => this.store.dispatch(notificationsLoad());
    add = (notification: NotificationBase) => this.store.dispatch(notificationAdd({ notification }));
    read = (id: string) => this.store.dispatch(notificationPatch({ id, notification: { read: true } }));
}
