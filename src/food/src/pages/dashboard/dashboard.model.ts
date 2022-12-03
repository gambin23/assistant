import { MealType } from '../../models/calendar';

export interface DashboardQueryParams {
    date?: string;
    meal?: MealType;
}
