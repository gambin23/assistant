import { SortOrder } from '@assistant/common-sdk';
import { Recipes } from '../../models/recipes';

export interface RecipesState {
    data: Recipes;
    isBusy: boolean;
    isError: boolean;
}

export interface RecipesFilters {
    search: string;
    categories: string[];
    sort: SortOrder;
    isFavourite?: boolean;
    isArchived?: boolean;
}
