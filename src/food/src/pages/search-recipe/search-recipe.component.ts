import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { NotFoundModule } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { FoodRecipeComponent } from '../../common/recipe/recipe.component';
import { RecipesSelector } from '../../store/recipes/recipes.selector';

@Component({
    selector: 'search-recipe-page',
    standalone: true,
    templateUrl: './search-recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FoodRecipeComponent,
        NotFoundModule
    ]
})
export default class SearchRecipePageComponent implements OnInit {

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
