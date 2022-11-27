import { Dictionary } from '@assistant/common-sdk';
import { Recipe } from '../../models/recipes';

export interface RecipesState {
    data: Dictionary<Recipe>;
    isBusy: boolean;
    isError: boolean;
}
