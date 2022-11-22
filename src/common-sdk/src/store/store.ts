import { PreferencesState } from './../preferences/preferences.model';
import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';
import { appReducer } from '../app/app.reducer';
import { AppState } from '../app/app.model';
import { preferencesReducer } from '../preferences/preferences.reducer';

export interface AppStore {
    user: UserState;
    app: AppState;
    preferences: PreferencesState
}

export const reducers = {
    user: userReducer,
    preferences: preferencesReducer,
    app: appReducer
}
