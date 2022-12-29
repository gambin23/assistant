import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsActions } from '@assistant/common-sdk';
import { routes } from './routes';
import { ADMIN_APP } from '../name';
import { EffectsModule } from '@ngrx/effects';
import { adminEffects } from './store';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forFeature(adminEffects)
    ]
})
export class AdminAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadAppRoutes(ADMIN_APP.id, routes);
    }
}
