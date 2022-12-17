import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ImageDirective } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { routeFoodNewRecipe, routeFoodRecipe } from './../../routes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { RecipesFiltersComponent } from '../../components/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { RecipesActions } from '../../store/recipes/recipes.actions';
import { RecipesFilters } from '../../models/recipe';

@Component({
    selector: 'recipes-page',
    standalone: true,
    templateUrl: './recipes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeCardComponent,
        RecipesFiltersComponent,
        ImageDirective
    ]
})
export default class RecipesPageComponent implements OnInit {

    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;
    filters: RecipesFilters = {
        search: '',
        categories: [],
        sort: 'asc'
    };
    view: RecipeView = 'grid';

    routeFoodNewRecipe = routeFoodNewRecipe;
    routeFoodRecipe = routeFoodRecipe;

    constructor(
        private recipesSelector: RecipesSelector,
        private recipesActions: RecipesActions
    ) { }

    ngOnInit() {
        this.recipes$ = this.recipesSelector.recipes$(this.filters);
        this.isBusy$ = this.recipesSelector.isBusy$();
    }

    onFiltered = (filters: RecipesFilters) => this.filters = filters;
    onViewChanged = (view: RecipeView) => this.view = view;
    onRecipeUpdated = (event: { id: string, recipe: Partial<Recipe> }) => this.recipesActions.patch(event.id, event.recipe);
}
