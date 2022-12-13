import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { AppStore } from '../store/store';
import { notificationsSkeleton } from './notifications.model';

const selectNotifications = createSelector((state: AppStore) => state.notifications, x => x.isBusy ? notificationsSkeleton : x.data);
const selectIsBusy = createSelector((state: AppStore) => state.notifications, x => x.isBusy);

@Injectable({ providedIn: 'root' })
export class NotificationsSelector {

    constructor(private store: Store<AppStore>) { }

    notifications$ = () => this.store.select(selectNotifications);
    isBusy$ = () => this.store.select(selectIsBusy);
}
