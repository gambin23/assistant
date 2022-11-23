import { PreferencesState } from './../preferences/preferences.model';
import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';
import { appsReducer } from '../apps/apps.reducer';
import { AppState } from '../apps/apps.model';
import { preferencesReducer } from '../preferences/preferences.reducer';

export interface AppStore {
    user: UserState;
    app: AppState;
    preferences: PreferencesState
}

export const reducers = {
    user: userReducer,
    preferences: preferencesReducer,
    app: appsReducer
}
