import { PreferencesState } from './../preferences/preferences.model';
import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';
import { preferencesReducer } from '../preferences/preferences.reducer';

export interface AppState {
    user: UserState;
    preferences: PreferencesState
}

export const reducers = {
    user: userReducer,
    preferences: preferencesReducer
}
