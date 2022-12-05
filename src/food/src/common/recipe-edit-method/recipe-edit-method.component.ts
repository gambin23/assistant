import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
        EditCardModule,
        ModalModule,
        ListModule,
        TagComponent,
        IconComponent
    ]
})
export class FoodRecipeEditMethodComponent implements OnInit {

    @Input() method!: string[];
    @Output() updated = new EventEmitter<string[]>();

    newItem = "";
    newMethod: string[] = [];
    showModal = false;

    ngOnInit() {
        this.newMethod = this.method;
    }

    onEdit = () => this.showModal = true;
    onAdd = () => {
        this.newMethod = [...this.newMethod, this.newItem];
        this.newItem = "";
    }
    onDelete = (method: string) => this.newMethod = this.newMethod.filter(x => x != method);
    onSave = () => {
        this.updated.emit(this.newMethod);
        this.showModal = false;
    }
    onCancel = () => this.showModal = false;
    isActive = (method: string) => this.newMethod.includes(method);
    isSaveDisabled = () => isEqual(this.method, this.newMethod);
}
