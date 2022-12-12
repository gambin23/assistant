import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { alertAdd, alertClear, alertRemove } from './alert.actions';
import { AlertState } from './alert.model';

const initialState: AlertState = {
    data: []
};

export const alertReducer = createReducer(
    initialState,
    on(alertAdd, (state, action) => setState(state, { data: [...state.data, action.alert] })),
    on(alertRemove, (state, action) => setState(state, { data: state.data.filter(alert => alert != action.alert) })),
    on(alertClear, (state) => setState(state, { data: [] }))
);
