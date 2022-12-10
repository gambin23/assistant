import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { getCookTime } from '../../models/cook-time';
import { RecipeView } from './recipe-card.model';

@Component({
    selector: 'food-recipe-card',
    standalone: true,
    templateUrl: './recipe-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodRecipeCardComponent {

    @Input() recipe!: Recipe;
    @Input() view: RecipeView = 'grid';
    @Input() readonly = false;

    getCookTime = getCookTime;

}
