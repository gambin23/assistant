import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { App } from './app.model';

export const appSwitch = createAction('[APP] Switch', props<{ name: string }>());
export const appLoad = createAction('[APP] Load', props<{ app: App }>());

@Injectable({ providedIn: 'root' })
export class AppActions {

    constructor(private store: Store) { }

    switchApp(name: string) {
        this.store.dispatch(appSwitch({ name }));
    }

    loadApp(app: App) {
        app = {
            ...app,
            routes: app.routes.map(x => {
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
