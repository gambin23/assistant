import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppActions, AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_NAME_FINANCE = 'finance';

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
    constructor(private appActions: AppActions) {
        this.appActions.loadApp({
            name: APP_NAME_FINANCE,
            icon: 'dollar-sign',
            routes: financeRoutes
        });
    }
}
