import { Route } from '@angular/router';

export interface AppRoute extends Route {
    icon?: string;
}

export type AppRoutes = AppRoute[];
