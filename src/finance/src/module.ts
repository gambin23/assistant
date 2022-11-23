import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppsActions, AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './dashboard/dashboard.component';

export const FINANCE_APP: App = {
    id: 'finance',
    name: 'Finance',
    icon: 'dollar-sign'
};

const financeRoutes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'table-list',
        component: DashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild([
        ...financeRoutes,
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        }
    ]
    )]
})
export class FinanceAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadApp({
            ...FINANCE_APP,
            routes: financeRoutes
        });
    }
}
