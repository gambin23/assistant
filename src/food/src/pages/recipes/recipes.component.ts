import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Dictionary } from '@assistant/common-sdk';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { RecipesFilters } from '../../components/recipes-filters/recipes-filters.model';
import { RecipesFiltersComponent } from '../../components/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
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

    recipes$!: Observable<Dictionary<Recipe>>;
    isBusy$!: Observable<boolean>;
    view: RecipeView = 'grid';

    constructor(private recipesSelector: RecipesSelector) { }

    ngOnInit() {
        this.recipes$ = this.recipesSelector.recipes$();
        this.isBusy$ = this.recipesSelector.isBusy$();
    }

    onFiltered(filters: RecipesFilters) {
        console.log(filters);
    }

    onViewChanged(view: RecipeView) {
        this.view = view;
    }
}
