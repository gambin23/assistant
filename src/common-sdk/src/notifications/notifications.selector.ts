import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { AppStore } from '../store/store';
import { Notification, NotificationFilters, notificationsSkeleton } from './notifications.model';

const selectNotifications = (filters: NotificationFilters) => createSelector((state: AppStore) => state.notifications, x => x.isBusy ? notificationsSkeleton : filterNotifications(x.data, filters));
const selectIsBusy = createSelector((state: AppStore) => state.notifications, x => x.isBusy);

@Injectable({ providedIn: 'root' })
export class NotificationsSelector {

    constructor(private store: Store<AppStore>) { }

    notifications$ = (filters: NotificationFilters) => this.store.select(selectNotifications(filters));
    isBusy$ = () => this.store.select(selectIsBusy);
}

const filterNotifications = (notifications: Notification[], filters: NotificationFilters) => {
    if (filters.view === 'unread')
        notifications = notifications.filter(x => !x.read);

    return notifications;
}
