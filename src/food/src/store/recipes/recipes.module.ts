import { NgModule } from '@angular/core';
import { RecipesActions } from './recipes.actions';
import { RecipesSelector } from './recipes.selector';
import { RecipesService } from './recipes.service';

@NgModule({
    providers: [
        RecipesActions,
        RecipesSelector,
        RecipesService
    ]
})
export class FoodRecipesModule { }
