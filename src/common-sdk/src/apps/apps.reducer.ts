import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { appLoad, appSwitch } from './apps.actions';
import { AppsState } from './apps.model';

const initialState: AppsState = {
    active: '',
    apps: {}
};

export const appsReducer = createReducer(
    initialState,
    on(appSwitch, (state, action) => setState(state, { active: action.id })),
    on(appLoad, (state, action) => setState(state, { apps: { ...state.apps, [action.app.id]: action.app } }))
);
