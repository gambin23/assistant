import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { routeFoodNewRecipe, routeFoodRecipe } from './../../routes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { RecipesFiltersComponent } from '../../components/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { RecipesFilters } from '../../store/recipes/recipes.model';
import { Recipe } from '../../models/recipes';

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
export class RecipesPageComponent implements OnInit {

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

    constructor(private recipesSelector: RecipesSelector) { }

    ngOnInit() {
        this.recipes$ = this.recipesSelector.recipes$(this.filters);
        this.isBusy$ = this.recipesSelector.isBusy$();
    }

    onFiltered = (filters: RecipesFilters) => this.filters = filters;
    onViewChanged = (view: RecipeView) => this.view = view;

}
