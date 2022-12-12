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

export interface AppStore {
    user: UserState;
    apps: AppsState;
    preferences: PreferencesState,
    alert: AlertState
}

export const reducers: ActionReducerMap<AppStore> = {
    user: userReducer,
    preferences: preferencesReducer,
    apps: appsReducer,
    alert: alertReducer
}

export const effects = [AlertEffects];

export const setState = <T>(state: T, partial: Partial<T>) => { return { ...state, ...partial } }
