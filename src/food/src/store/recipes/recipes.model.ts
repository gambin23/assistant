import { Dictionary, SortOrder } from '@assistant/common-sdk';
import { Recipe } from '../../models/recipes';

export interface RecipesState {
    data: Dictionary<Recipe>;
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
