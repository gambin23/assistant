import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HostComponent } from './host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';


export const foodRoutes: Routes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: 'recipes',
        title: 'Recipes',
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
