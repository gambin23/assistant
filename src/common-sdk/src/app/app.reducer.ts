import { createReducer, on } from '@ngrx/store';
import { appLoad, appSwitch } from './app.actions';
import { AppState } from './app.model';

const initialState: AppState = {
    active: '',
    apps: {}
};

export const appReducer = createReducer(
    initialState,
    on(appSwitch, (state, action) => { return { ...state, active: action.name } }),
    on(appLoad, (state, action) => { return { ...state, apps: { ...state.apps, [action.app.name]: action.app } } })
);
