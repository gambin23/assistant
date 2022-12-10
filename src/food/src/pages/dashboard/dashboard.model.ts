import { MealType } from '@assistant/food/models';

export interface DashboardQueryParams {
    date?: string;
    meal?: MealType;
}
