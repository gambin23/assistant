import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IconComponent, PageComponent } from '@assistant/common-ui';
import { Category } from '@assistant/food/models';
import { routeFoodRecipes, routeFoodSearchRecipe } from '../../routes';
import { FoodRecipeCardComponent } from '../../common/recipe-card/recipe-card.component';
import { Recipe, RecipesFilters } from '../../models/recipe';
import { RecipesFiltersComponent } from '../../common/recipes-filters/recipes-filters.component';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';
import { RecipesActions } from '../../store/recipes/recipes.actions';
import { CategoriesSelector } from '../../store/categories/categories.selector';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { SearchSelector } from '../../store/search/search.selector';
import { SearchActions } from '../../store/search/search.actions';
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
