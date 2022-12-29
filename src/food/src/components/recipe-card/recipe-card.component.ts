import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent, ImageDirective } from '@assistant/common-ui';
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
        IconComponent,
        ImageDirective
    ]
})
export class FoodRecipeCardComponent {

    @Input() recipe!: Recipe;
    @Input() view: RecipeView = 'grid';
    @Input() showAddButton = false;
    @Input() showFavouriteButton = false;
    @Input() showArchiveButton = false;

    @Output() updated = new EventEmitter<{ id: string, recipe: Partial<Recipe> }>();
    @Output() added = new EventEmitter<Recipe>();

    getCookTime = getCookTime;
    showActions = () => this.showAddButton || this.showFavouriteButton || this.showArchiveButton;
    onUpdated = (event: Event, recipe: Partial<Recipe>) => {
        this.updated.emit({ id: this.recipe.id, recipe });
        event.stopPropagation();
        event.preventDefault();
    }
    onAdded = (event: Event) => {
        this.added.emit(this.recipe);
        event.stopPropagation();
        event.preventDefault();
    }
}
