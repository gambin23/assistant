import { Route } from '@angular/router';

export interface AppRoute extends Route {
    icon?: string;
    hidden?: boolean;
}

export type AppRoutes = AppRoute[];
