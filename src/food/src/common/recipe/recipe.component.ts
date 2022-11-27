import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'food-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodRecipeComponent {

    @Input() recipe!: Recipe;
}
