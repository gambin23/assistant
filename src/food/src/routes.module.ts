import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '@assistant/common-sdk';
import { HostComponent } from './host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';

export const foodRoutes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'table-list',
        component: DashboardComponent
    },
    {
        path: 'recipes',
        title: 'Recipes',
        icon: 'book',
        component: RecipesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: HostComponent,
            children: [
                ...foodRoutes,
                {
                    path: '',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                }
            ]
        }
    ])]
})
export class FoodRoutesModule { }
