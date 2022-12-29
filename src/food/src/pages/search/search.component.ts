import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IconComponent, PageComponent } from '@assistant/common-ui';
import { Category, Recipe, RecipesFilters } from '@assistant/food/models';
import { CategoriesSelector, RecipesActions, RecipesSelector, SearchActions, SearchSelector } from '@assistant/food/store';
import { FoodRecipeCardComponent, RecipeView, RecipesFiltersComponent } from '@assistant/food/components';
import { routeFoodRecipes, routeFoodSearchRecipe } from '../../routes';
import { RecipesQueryParams } from '../recipes/recipes.model';

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
export default class SearchPageComponent extends PageComponent<RecipesQueryParams> {

    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;
    myRecipesCount$!: Observable<number>;
    categories$!: Observable<Category[]>;

    constructor(
        router: Router,
        route: ActivatedRoute,
        title: Title,
        changeRef: ChangeDetectorRef,
        private recipesActions: RecipesActions,
        private recipesSelector: RecipesSelector,
        private categoriesSelector: CategoriesSelector,
        private searchActions: SearchActions,
        private searchSelector: SearchSelector
    ) {
        super(router, route, title, changeRef);
    }

    ngOnInit() {
        this.categories$ = this.categoriesSelector.categories$();
        this.myRecipesCount$ = this.recipesSelector.recipesCount$();
        this.recipes$ = this.searchSelector.recipes$();
        this.isBusy$ = this.searchSelector.isBusy$();

        this.queryParamsInit({
            sort: 'asc',
            name: '',
            view: 'grid'
        });
        this.queryParamsSubscribe(() => {
            this.searchActions.search(this.queryParams);
        });
    }

    routeFoodRecipes = routeFoodRecipes;
    routeFoodSearchRecipe = routeFoodSearchRecipe;

    onFiltered = (filters: Partial<RecipesFilters>) => this.queryParamsSet(filters);
    onViewChanged = (view: RecipeView) => this.queryParamsSet({ view });
    onAdded = (recipe: Recipe) => this.recipesActions.add(recipe);
}
