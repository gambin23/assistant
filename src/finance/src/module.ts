import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsActions, AppRoutes } from '@assistant/common-sdk';
import { FINANCE_APP } from '../name';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'table-list',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FinanceAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadApp({ ...FINANCE_APP, routes });
    }
}
