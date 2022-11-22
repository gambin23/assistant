import { Dictionary } from '../common';
import { AppRoutes } from './../routes/routes.model';

export interface App {
    name: string;
    icon: string;
    routes: AppRoutes;
}

export interface AppState {
    active: string;
    apps: Dictionary<App>;
}
