import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { isEqual } from 'lodash-es';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent, EditCardBaseComponent } from '@assistant/common-ui';

@Component({
    selector: 'food-recipe-edit-ingredients',
    standalone: true,
    templateUrl: './recipe-edit-ingredients.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        DragDropModule,
        EditCardModule,
        ModalModule,
        ListModule,
        TagComponent,
        IconComponent
    ]
})
export class FoodRecipeEditIngredientsComponent extends EditCardBaseComponent<string[]> {

    @Input() set ingredients(value: string[]) { this.initValue(value) };

    newIngredient = "";

    onAdd = () => {
        this.newValue = [...this.newValue, this.newIngredient];
        this.newIngredient = "";
    }
    onDelete = (ingredient: string) => this.newValue = this.newValue.filter(x => x != ingredient);
    onSorted = (event: any) => {
        const ingredients = [...this.newValue];
        moveItemInArray(ingredients, event.previousIndex, event.currentIndex);
        this.newValue = ingredients;
    }
    isActive = (category: string) => this.newValue.includes(category);
    isSaveDisabled = () => isEqual(this.oldValue, this.newValue);
}
