import { createReducer, on } from '@ngrx/store';
import { appLoad, appSwitch } from './apps.actions';
import { AppsState } from './apps.model';

const initialState: AppsState = {
    active: '',
    apps: {}
};

export const appsReducer = createReducer(
    initialState,
    on(appSwitch, (state, action) => { return { ...state, active: action.id } }),
    on(appLoad, (state, action) => { return { ...state, apps: { ...state.apps, [action.app.id]: action.app } } })
);
