import { Category } from '@assistant/food/models';

export interface CategoriesState {
    data: Category[];
    isBusy: boolean;
    isError: boolean;
}
