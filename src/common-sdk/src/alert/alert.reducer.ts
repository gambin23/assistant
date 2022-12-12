import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { alertAdd, alertClear } from './alert.actions';
import { AlertState } from './alert.model';

const initialState: AlertState = {
    data: undefined
};

export const alertReducer = createReducer(
    initialState,
    on(alertAdd, (state, action) => setState(state, { data: action.alert })),
    on(alertClear, (state) => setState(state, { data: undefined }))
);
