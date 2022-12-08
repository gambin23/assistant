import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { isEqual } from 'lodash-es';
import { EditCardBaseComponent, EditCardModule, IconComponent, ListModule, ModalModule, TagComponent } from '@assistant/common-ui';

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
export class FoodRecipeEditMethodComponent extends EditCardBaseComponent<string[]>{

    @Input() set method(value: string[]) { this.initValue(value) };

    newItem = "";

    onAdd = () => {
        this.newValue = [...this.newValue, this.newItem];
        this.newItem = "";
    }
    onDelete = (method: string) => this.newValue = this.newValue.filter(x => x != method);
    onSorted = (event: any) => {
        const ingredients = [...this.newValue];
        moveItemInArray(ingredients, event.previousIndex, event.currentIndex);
        this.newValue = ingredients;
    }

    isActive = (method: string) => this.newValue.includes(method);
    isSaveDisabled = () => isEqual(this.oldValue, this.newValue);
}
