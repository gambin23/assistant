import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ImageDirective, NoResultModule, PageComponent } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { routeFoodNewRecipe, routeFoodRecipe } from './../../routes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { RecipesFiltersComponent } from '../../common/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { RecipesActions } from '../../store/recipes/recipes.actions';
import { RecipesFilters } from '../../models/recipe';
import { RecipesQueryParams } from './recipes.model';

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
        ImageDirective,
        NoResultModule
    ]
})
export default class RecipesPageComponent extends PageComponent<RecipesQueryParams> implements OnInit {

    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;

    constructor(
        router: Router,
        route: ActivatedRoute,
        title: Title,
        changeRef: ChangeDetectorRef,
        private recipesSelector: RecipesSelector,
        private recipesActions: RecipesActions
    ) {
        super(router, route, title, changeRef);
    }

    ngOnInit() {
        this.isBusy$ = this.recipesSelector.isBusy$();

        this.queryParamsInit({
            search: '',
            categories: [],
            sort: 'asc',
            view: 'grid'
        });
        this.queryParamsSubscribe(() => {
            this.recipes$ = this.recipesSelector.recipes$(this.queryParams);
        });
    }

    routeFoodNewRecipe = routeFoodNewRecipe;
    routeFoodRecipe = routeFoodRecipe;
    onFiltered = (filters: RecipesFilters) => this.queryParamsSet({ ...filters });
    onViewChanged = (view: RecipeView) => this.queryParamsSet({ view });
    onRecipeUpdated = (event: { id: string, recipe: Partial<Recipe> }) => this.recipesActions.patch(event.id, event.recipe);
}
