import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { isEqual } from 'lodash-es';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent } from '@assistant/common-ui';

@Component({
    selector: 'food-recipe-edit-method',
    standalone: true,
    templateUrl: './recipe-edit-method.component.html',
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
export class FoodRecipeEditMethodComponent {

    @Input() set method(value: string[]) {
        this.newMethod = this.oldMethod = value;
    };
    @Input() readonly = false;
    @Output() updated = new EventEmitter<string[]>();

    newItem = "";
    oldMethod!: string[];
    newMethod!: string[];
    showModal = false;

    onEdit = () => this.showModal = true;
    onAdd = () => {
        this.newMethod = [...this.newMethod, this.newItem];
        this.newItem = "";
    }
    onDelete = (method: string) => this.newMethod = this.newMethod.filter(x => x != method);
    onSorted = (event: any) => {
        const ingredients = [...this.newMethod];
        moveItemInArray(ingredients, event.previousIndex, event.currentIndex);
        this.newMethod = ingredients;
    }
    onSave = () => {
        this.updated.emit(this.newMethod);
        this.showModal = false;
    }
    onClose = () => this.showModal = false;
    isActive = (method: string) => this.newMethod.includes(method);
    isSaveDisabled = () => isEqual(this.oldMethod, this.newMethod);
}
