import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesFilters } from '../../models/recipe';

export interface RecipesQueryParams extends RecipesFilters {
    view?: RecipeView;
}
