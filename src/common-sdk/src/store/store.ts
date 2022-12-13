import { AlertState } from './../alert/alert.model';
import { ActionReducerMap } from '@ngrx/store';
import { PreferencesState } from './../preferences/preferences.model';
import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';
import { appsReducer } from '../apps/apps.reducer';
import { AppsState } from '../apps/apps.model';
import { preferencesReducer } from '../preferences/preferences.reducer';
import { alertReducer } from '../alert/alert.reducer';
import { AlertEffects } from '../alert/alert.effects';
import { notificationsReducer } from '../notifications/notifications.reducer';
import { NotificationsState } from '../notifications/notifications.model';
import { NotificationsEffects } from '../notifications/notifications.effects';

export interface AppStore {
    user: UserState;
    apps: AppsState;
    preferences: PreferencesState,
    alert: AlertState,
    notifications: NotificationsState
}

export const reducers: ActionReducerMap<AppStore> = {
    user: userReducer,
    preferences: preferencesReducer,
    apps: appsReducer,
    alert: alertReducer,
    notifications: notificationsReducer
}

export const effects = [AlertEffects, NotificationsEffects];

export const setState = <T>(state: T, partial: Partial<T>) => { return { ...state, ...partial } }
