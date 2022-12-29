import { RecipeView } from '@assistant/food/components';
import { RecipesFilters } from '../../models/recipe';

export interface RecipesQueryParams extends RecipesFilters {
    view?: RecipeView;
}
