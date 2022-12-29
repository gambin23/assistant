import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NoResultModule } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { UserSelector } from '@assistant/common-sdk';
import { FoodRecipeComponent } from '../../common/recipe/recipe.component';
import { RecipesActions } from '../../store/recipes/recipes.actions';
import { SearchSelector } from '../../store/search/search.selector';
import { SearchActions } from '../../store/search/search.actions';

@Component({
    selector: 'search-recipe-page',
    standalone: true,
    templateUrl: './search-recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeComponent,
        NoResultModule
    ]
})
export default class SearchRecipePageComponent implements OnInit {

    recipe$!: Observable<Recipe | undefined>;
    isBusy$!: Observable<boolean>;
    isAdmin$!: Observable<boolean>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private searchActions: SearchActions,
        private searchSelector: SearchSelector,
        private recipesActions: RecipesActions,
        private userSelector: UserSelector
    ) { }

    ngOnInit() {
        const recipeId = this.activatedRoute.snapshot.params['id'];
        this.searchActions.get(recipeId);
        this.recipe$ = this.searchSelector.recipe$(recipeId);
        this.isBusy$ = this.searchSelector.isBusy$();
        this.isAdmin$ = this.userSelector.isAdmin$();
    }

    onAdded = (recipe: Recipe) => this.recipesActions.add(recipe);
}
