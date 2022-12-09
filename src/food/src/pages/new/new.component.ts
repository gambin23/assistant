import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { StepperModule } from '@assistant/common-ui';
import { NewRecipeSelector } from './../../store/new-recipe/new-recipe.selector';
import { NewRecipeActions } from './../../store/new-recipe/new-recipe.actions';
import { Recipe } from '../../models/recipes';
import { FoodRecipeEditHeaderComponent } from './../../common/recipe-edit-header/recipe-edit-header.component';
import { FoodRecipeEditCategoriesComponent } from './../../common/recipe-edit-categories/recipe-edit-categories.component';
import { FoodRecipeEditCooktimeComponent } from './../../common/recipe-edit-cooktime/recipe-edit-cooktime.component';
import { FoodRecipeEditIngredientsComponent } from './../../common/recipe-edit-ingredients/recipe-edit-ingredients.component';
import { FoodRecipeEditMethodComponent } from './../../common/recipe-edit-method/recipe-edit-method.component';
import { FoodRecipeComponent } from '../../common/recipe/recipe.component';

@Component({
    selector: 'new-page',
    standalone: true,
    templateUrl: './new.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        StepperModule,
        FoodRecipeEditHeaderComponent,
        FoodRecipeEditCategoriesComponent,
        FoodRecipeEditCooktimeComponent,
        FoodRecipeEditIngredientsComponent,
        FoodRecipeEditMethodComponent,
        FoodRecipeComponent
    ]
})
export default class NewPageComponent implements OnInit {

    recipe$!: Observable<Recipe>

    constructor(
        private newRecipeActions: NewRecipeActions,
        private newRecipeSelector: NewRecipeSelector
    ) { }

    ngOnInit() {
        this.recipe$ = this.newRecipeSelector.recipe$();
    }

    onUpdated = (recipe: Partial<Recipe>) => this.newRecipeActions.patch(recipe);
    onCompleted = () => this.newRecipeActions.add();
    isInvalid = (recipe: Recipe) => !recipe.name || !recipe.description;
}
