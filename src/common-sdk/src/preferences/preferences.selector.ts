import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStore } from '../store/store';
import { Theme } from '../theme/theme.model';
import { PreferencesState } from './preferences.model';

@Injectable({providedIn: 'root'})
export class PreferencesSelector {

    constructor(private store: Store<AppStore>) { }

    preferences$(): Observable<PreferencesState> {
        return this.store.select(state => state.preferences);
    }

    theme$(): Observable<Theme | undefined> {
        return this.preferences$().pipe(map(x => x.theme));
    }
}
