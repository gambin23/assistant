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
        redirectTo: '',
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(x => x.NotificationsModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'subscription',
        loadChildren: () => import('./subscription/subscription.module').then(x => x.SubscriptionModule),
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('@assistant/admin').then(x => x.AdminAppModule),
        canLoad: [AuthenticationGuard]
    },
    {
        path: 'food',
        loadChildren: () => import('@assistant/food').then(x => x.FoodAppModule),
        canLoad: [AuthenticationGuard]
    },
    {
        path: 'finance',
        loadChildren: () => import('@assistant/finance').then(x => x.FinanceAppModule),
        canLoad: [AuthenticationGuard]
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
