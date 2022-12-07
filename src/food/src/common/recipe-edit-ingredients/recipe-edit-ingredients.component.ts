import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { isEqual } from 'lodash-es';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent } from '@assistant/common-ui';

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
export class FoodRecipeEditIngredientsComponent {

    @Input() set ingredients(value: string[]) {
        this.oldIngredients = this.newIngredients = value;
    };
    @Input() readonly = false;
    @Output() updated = new EventEmitter<string[]>();

    newIngredient = "";
    oldIngredients!: string[];
    newIngredients!: string[];
    showModal = false;

    onEdit = () => this.showModal = true;
    onAdd = () => {
        this.newIngredients = [...this.newIngredients, this.newIngredient];
        this.newIngredient = "";
    }
    onDelete = (ingredient: string) => this.newIngredients = this.newIngredients.filter(x => x != ingredient);
    onSorted = (event: any) => {
        const ingredients = [...this.newIngredients];
        moveItemInArray(ingredients, event.previousIndex, event.currentIndex);
        this.newIngredients = ingredients;
    }
    onSave = () => {
        this.updated.emit(this.newIngredients);
        this.showModal = false;
    }
    onClose = () => this.showModal = false;
    isActive = (category: string) => this.newIngredients.includes(category);
    isSaveDisabled = () => isEqual(this.oldIngredients, this.newIngredients);
}
