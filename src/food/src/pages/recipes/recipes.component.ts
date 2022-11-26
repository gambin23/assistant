import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipes } from '../../models/recipes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { RecipesFilters } from '../../components/recipes-filters/recipes-filters.model';
import { RecipesFiltersComponent } from '../../components/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';

@Component({
    selector: 'recipes-page',
    standalone: true,
    templateUrl: './recipes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeCardComponent,
        RecipesFiltersComponent
    ]
})
export class RecipesPageComponent {

    recipes = recipes;
    view: RecipeView = 'grid';

    onFiltered(filters: RecipesFilters) {
        console.log(filters);
    }

    onViewChanged(view: RecipeView) {
        this.view = view;
    }
}
