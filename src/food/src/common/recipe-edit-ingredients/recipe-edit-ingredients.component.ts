import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
        EditCardModule,
        ModalModule,
        ListModule,
        TagComponent,
        IconComponent
    ]
})
export class FoodRecipeEditIngredientsComponent implements OnInit {

    @Input() ingredients!: string[];
    @Input() readonly = false;
    @Output() updated = new EventEmitter<string[]>();

    newIngredient = "";
    newIngredients: string[] = [];
    showModal = false;

    ngOnInit() {
        this.newIngredients = this.ingredients;
    }

    onEdit = () => this.showModal = true;
    onAdd = () => {
        this.newIngredients = [...this.newIngredients, this.newIngredient];
        this.newIngredient = "";
    }
    onDelete = (ingredient: string) => this.newIngredients = this.newIngredients.filter(x => x != ingredient);
    onSave = () => {
        this.updated.emit(this.newIngredients);
        this.showModal = false;
    }
    onCancel = () => this.showModal = false;
    isActive = (category: string) => this.newIngredients.includes(category);
    isSaveDisabled = () => isEqual(this.ingredients, this.newIngredients);
}
