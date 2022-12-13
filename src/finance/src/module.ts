import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsActions } from '@assistant/common-sdk';
import { FINANCE_APP } from '../name';
import { routes } from './routes';

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FinanceAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadAppRoutes(FINANCE_APP.id, routes);
    }
}
