import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@assistant/common-ui';
import { routeFoodRecipes, routeFoodSearchRecipe } from '../../routes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { recipesSkeleton } from '../../models/recipes';
import { RecipesFiltersComponent } from '../../components/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesFilters } from '../../store/recipes/recipes.model';

@Component({
    selector: 'search-page',
    standalone: true,
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        IconComponent,
        RecipesFiltersComponent,
        FoodRecipeCardComponent
    ]
})
export default class SearchPageComponent {

    recipes = recipesSkeleton;
    view: RecipeView = 'grid';

    routeFoodRecipes = routeFoodRecipes;
    routeFoodSearchRecipe = routeFoodSearchRecipe;

    onFiltered = (filters: RecipesFilters) => console.log(filters);
    onViewChanged = (view: RecipeView) => this.view = view;
}
