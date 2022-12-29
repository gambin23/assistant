import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppsActions } from '@assistant/common-sdk';
import { routes } from './routes';
import { ADMIN_APP } from '../name';
import { effects, reducers } from './store';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forFeature(ADMIN_APP.id, reducers),
        EffectsModule.forFeature(effects)
    ]
})
export class AdminAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadAppRoutes(ADMIN_APP.id, routes);
    }
}
