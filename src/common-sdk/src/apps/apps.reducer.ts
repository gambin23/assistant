import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { appSwitch, appLoadRoutes, appsLoad } from './apps.actions';
import { AppsState } from './apps.model';

const initialState: AppsState = {
    active: '',
    apps: {},
    routes: {}
};

export const appsReducer = createReducer(
    initialState,
    on(appSwitch, (state, action) => setState(state, { active: action.id })),
    on(appsLoad, (state, action) => setState(state, { apps: action.apps })),
    on(appLoadRoutes, (state, action) => setState(state, { routes: { ...state.routes, [action.id]: action.routes } }))
);
