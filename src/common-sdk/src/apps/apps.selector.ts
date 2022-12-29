import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { omit } from 'lodash-es';
import { Dictionary } from '../common';
import { AppRoutes } from '../routes/routes.model';
import { AppStore } from '../store/store';
import { App } from './apps.model';
import { selectUser } from '../user/user.selector';


const selectAppState = createSelector((state: AppStore) => state.apps, x => x);
const selectActiveAppName = createSelector(selectAppState, x => x.active);
const selectApps = createSelector(selectAppState, selectUser, (x, user) => user?.subscriptionType === 'admin' ? x.apps : omit(x.apps, 'admin'));
const selectActiveApp = createSelector(selectAppState, x => x.apps[x.active]);
const selectAppRoutes = createSelector(selectAppState, x => x.routes[x.active]);

@Injectable({ providedIn: 'root' })
export class AppsSelector {

    constructor(private store: Store<AppStore>) { }

    activeAppName$(): Observable<string> {
        return this.store.select(selectActiveAppName);
    }

    apps$(): Observable<Dictionary<App>> {
        return this.store.select(selectApps);
    }

    activeApp$(): Observable<App> {
        return this.store.select(selectActiveApp);
    }

    activeRoutes$(): Observable<AppRoutes> {
        return this.store.select(selectAppRoutes);
    }
}
