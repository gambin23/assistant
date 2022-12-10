import { Recipes } from '@assistant/food/models';

export interface RecipesState {
    data: Recipes;
    isBusy: boolean;
    isError: boolean;
}

