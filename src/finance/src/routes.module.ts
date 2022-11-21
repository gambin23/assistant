import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '@assistant/common-sdk';
import { HostComponent } from './host.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const financeRoutes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'table-list',
        component: DashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: HostComponent,
            children: [
                ...financeRoutes,
                {
                    path: '',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                }
            ]
        }
    ])]
})
export class FinanceRoutesModule { }
