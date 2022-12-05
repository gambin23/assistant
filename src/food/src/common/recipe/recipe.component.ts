import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EditCardModule, IconComponent, ModalModule } from '@assistant/common-ui';
import { getCookTime } from '../../models/cook-time';
import { Recipe } from '../../models/recipes';
import { FoodRecipeEditCooktimeComponent } from "../recipe-edit-cooktime/recipe-edit-cooktime.component";
import { FoodRecipeEditCategoriesComponent } from '../recipe-edit-categories/recipe-edit-categories.component';
import { FoodRecipeEditIngredientsComponent } from "../recipe-edit-ingredients/recipe-edit-ingredients.component";
import { FoodRecipeEditMethodComponent } from "../recipe-edit-method/recipe-edit-method.component";

@Component({
    selector: 'food-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent,
        EditCardModule,
        ModalModule,
        FoodRecipeEditCooktimeComponent,
        FoodRecipeEditCategoriesComponent,
        FoodRecipeEditIngredientsComponent,
        FoodRecipeEditMethodComponent
    ]
})
export class FoodRecipeComponent {

    @Input() recipe!: Recipe;
    @Input() readonly = false;
    @Output() updated = new EventEmitter<Partial<Recipe>>();

    getCookTime = getCookTime;

    onUpdated(recipe: Partial<Recipe>) {
        this.recipe = { ...this.recipe, ...recipe };
    }
}
