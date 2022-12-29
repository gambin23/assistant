import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { StepperModule } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { NewRecipeActions, NewRecipeSelector } from '@assistant/food/store';
import {
    FoodRecipeComponent,
    FoodRecipeEditCategoriesComponent,
    FoodRecipeEditCooktimeComponent,
    FoodRecipeEditHeaderComponent,
    FoodRecipeEditIngredientsComponent,
    FoodRecipeEditMethodComponent
} from '@assistant/food/components';

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
