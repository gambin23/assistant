import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { App } from './apps.model';
import { AppRoutes } from '../routes/routes.model';
import { Dictionary } from '../common';

export const appsLoad = createAction('[APPS] Load', props<{ apps: Dictionary<App> }>());
export const appSwitch = createAction('[APPS] Switch', props<{ id: string }>());
export const appLoadRoutes = createAction('[APPS] Load Routes', props<{ id: string, routes: AppRoutes }>());

@Injectable({ providedIn: 'root' })
export class AppsActions {

    constructor(private store: Store) { }

    switchApp = (id: string) => this.store.dispatch(appSwitch({ id }));

    loadApps = (appsList: App[]) => {
        const apps: Dictionary<App> = {};
        appsList.map(app => apps[app.id] = app);
        this.store.dispatch(appsLoad({ apps }));
    }

    loadAppRoutes(id: string, routes: AppRoutes) {
        routes = routes
            .filter(x => !x.hidden)
            .map(x => {
                return {
                    path: x.path,
                    title: x.title,
                    icon: x.icon,
                }
            });
        this.store.dispatch(appLoadRoutes({ id, routes }));
    }
}
