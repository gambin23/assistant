import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'account',
        redirectTo: ''
    },
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'food',
        loadChildren: () => import('@assistant/food').then(x => x.FoodAppModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'finance',
        loadChildren: () => import('@assistant/finance').then(x => x.FinanceAppModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }
