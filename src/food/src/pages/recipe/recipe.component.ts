import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { NoResultModule } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { FoodRecipeComponent } from '../../common/recipe/recipe.component';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { RecipesActions } from '../../store/recipes/recipes.actions';

@Component({
    selector: 'recipe-page',
    standalone: true,
    templateUrl: './recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeComponent,
        NoResultModule
    ]
})
export default class RecipePageComponent implements OnInit {

    recipe$!: Observable<Recipe | undefined>;
    isBusy$!: Observable<boolean>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipesSelector: RecipesSelector,
        private recipesActions: RecipesActions
    ) { }

    ngOnInit() {
        this.recipe$ = this.activatedRoute.params.pipe(switchMap(params => this.recipesSelector.recipe$(params['id'])));
        this.isBusy$ = this.recipesSelector.isBusy$();
    }

    onUpdated = (id: string, recipe: Partial<Recipe>) => this.recipesActions.patch(id, recipe);
}
