import { Dictionary } from '../common';
import { AppRoutes } from '../routes/routes.model';


export interface App {
    id: string;
    name: string;
    icon: string;
}
export interface EnhancedApp extends App {
    routes?: AppRoutes;
}

export interface AppsState {
    active: string;
    apps: Dictionary<App>;
}
