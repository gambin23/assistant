import { ActionReducerMap } from '@ngrx/store';
import { PreferencesState } from './../preferences/preferences.model';
import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';
import { appsReducer } from '../apps/apps.reducer';
import { AppsState } from '../apps/apps.model';
import { preferencesReducer } from '../preferences/preferences.reducer';

export interface AppStore {
    user: UserState;
    apps: AppsState;
    preferences: PreferencesState
}

export const reducers: ActionReducerMap<AppStore> = {
    user: userReducer,
    preferences: preferencesReducer,
    apps: appsReducer
}

export const setState = <T>(state: T, partial: Partial<T>) => { return { ...state, ...partial } }
