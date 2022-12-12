import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStore } from '../store/store';
import { EnhancedApp } from './apps.model';


const selectAppState = createSelector((state: AppStore) => state.apps, x => x);
const selectActiveApp = createSelector(selectAppState, x => x.apps[x.active]);
const selectActiveAppName = createSelector(selectAppState, x => x.active);
const selectAppNames = createSelector(selectAppState, x => Object.keys(x.apps));

@Injectable({ providedIn: 'root' })
export class AppsSelector {

    constructor(private store: Store<AppStore>) { }

    activeApp$(): Observable<EnhancedApp> {
        return this.store.select(selectActiveApp);
    }

    activeAppName$(): Observable<string> {
        return this.store.select(selectActiveAppName);
    }

    appNames$(): Observable<string[]> {
        return this.store.select(selectAppNames);
    }
}
