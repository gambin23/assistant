import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { App, EnhancedApp } from './apps.model';

export const appSwitch = createAction('[APP] Switch', props<{ id: string }>());
export const appLoad = createAction('[APP] Load', props<{ app: EnhancedApp }>());

@Injectable({ providedIn: 'root' })
export class AppsActions {

    constructor(private store: Store) { }

    switchApp(id: string) {
        this.store.dispatch(appSwitch({ id }));
    }

    loadApp(app: EnhancedApp) {
        app = {
            ...app,
            routes: app.routes?.map(x => {
                return {
                    path: x.path,
                    title: x.title,
                    icon: x.icon,
                }
            })
        };
        this.store.dispatch(appLoad({ app }));
    }
}
