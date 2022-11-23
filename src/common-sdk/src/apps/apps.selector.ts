import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStore } from '../store/store';
import { App, EnhancedApp } from './apps.model';

@Injectable({ providedIn: 'root' })
export class AppsSelector {

    private appState$ = this.store.select(state => state.app);

    constructor(private store: Store<AppStore>) { }

    activeApp$(): Observable<EnhancedApp> {
        return this.appState$.pipe(map(x => x.apps[x.active]));
    }

    activeAppName$(): Observable<string> {
        return this.appState$.pipe(map(x => x.active))
    }

    appNames$(): Observable<string[]> {
        return this.appState$.pipe(map(x => Object.keys(x.apps)));
    }
}
