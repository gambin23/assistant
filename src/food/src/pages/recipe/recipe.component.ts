import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { FoodRecipeComponent } from '../../common/recipe/recipe.component';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'recipe-page',
    standalone: true,
    templateUrl: './recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeComponent
    ]
})
export class RecipePageComponent implements OnInit {

    recipe$!: Observable<Recipe | undefined>;
    isBusy$!: Observable<boolean>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipesSelector: RecipesSelector
    ) { }

    ngOnInit() {
        this.recipe$ = this.activatedRoute.params.pipe(switchMap(params => this.recipesSelector.recipe$(params['id'])));
        this.isBusy$ = this.recipesSelector.isBusy$();
    }
}
