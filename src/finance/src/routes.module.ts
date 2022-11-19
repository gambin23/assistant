import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HostComponent } from './host.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const financeRoutes: Routes = [
    {
        path: '',
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
