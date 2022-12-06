import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@assistant/common-ui';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'food-recipe-edit-actions',
    standalone: true,
    templateUrl: './recipe-edit-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodRecipeEditActionsComponent {

    @Input() recipe!: Recipe;
    @Input() readonly = false;
    @Output() updated = new EventEmitter<Partial<Recipe>>();

    onArchive = () => this.updated.emit({ isArchived: !this.recipe.isArchived });
    onFavourite = () => this.updated.emit({ isFavourite: !this.recipe.isFavourite });
}
