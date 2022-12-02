import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'food-recipe-select',
    standalone: true,
    templateUrl: './recipe-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodRecipeSelectComponent {

    @Input() recipes!: Recipe[];
    @Output() selected = new EventEmitter<Recipe>();

    onSelect(recipe: Recipe) {
        this.selected.emit(recipe);
    }
}
