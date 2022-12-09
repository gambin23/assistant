import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent, ListModule, SearchInputComponent, SearchListPipe } from '@assistant/common-ui';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'food-recipe-select',
    standalone: true,
    templateUrl: './recipe-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        ListModule,
        SearchListPipe,
        SearchInputComponent
    ]
})
export class FoodRecipeSelectComponent {

    @Input() recipes!: Recipe[];
    @Output() selected = new EventEmitter<Recipe>();

    search = '';

    onSelect(recipe: Recipe) {
        this.selected.emit(recipe);
    }
}
