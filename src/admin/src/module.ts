import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsActions } from '@assistant/common-sdk';
import { routes } from './routes';
import { ADMIN_APP } from '../name';

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AdminAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadAppRoutes(ADMIN_APP.id, routes);
    }
}
