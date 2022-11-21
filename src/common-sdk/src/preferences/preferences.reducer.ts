import { createReducer, on } from '@ngrx/store';
import { preferencesToggleDarkTheme } from './preferences.actions';
import { PreferencesState } from './preferences.model';

const initialState: PreferencesState = {
    theme: undefined
};

export const preferencesReducer = createReducer(
    initialState,
    on(preferencesToggleDarkTheme, (state) => { return { ...state, theme: state.theme === 'dark' ? '' : 'dark' } })
);
