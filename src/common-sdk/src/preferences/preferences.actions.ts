import { Injectable } from '@angular/core';
import { createAction, Store } from '@ngrx/store';

export const preferencesToggleDarkTheme = createAction('[PREFERENCES] Toggle Dark Theme');

@Injectable({providedIn: 'root'})
export class PreferencesActions {

    constructor(private store: Store) { }

    toggleDarkTheme() {
        this.store.dispatch(preferencesToggleDarkTheme());
    }
}
