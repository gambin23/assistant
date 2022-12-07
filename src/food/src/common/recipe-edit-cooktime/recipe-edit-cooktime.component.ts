import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCardModule, IconComponent, ListModule, ModalModule } from '@assistant/common-ui';
import { cookTimes, getCookTime } from '../../models/cook-time';

@Component({
    selector: 'food-recipe-edit-cooktime',
    standalone: true,
    templateUrl: './recipe-edit-cooktime.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        EditCardModule,
        ModalModule,
        ListModule,
        IconComponent
    ]
})
export class FoodRecipeEditCooktimeComponent {

    @Input() set cookTime(value: number) {
        this.oldCookTime = this.newCookTime =value;
    };
    @Input() readonly = false;
    @Output() updated = new EventEmitter<number>();

    cookTimes = cookTimes;
    oldCookTime!: number;
    newCookTime!: number;
    showModal = false;

    getCookTime = getCookTime;
    onEdit = () => this.showModal = true;
    onSelect = (cookTime: number) => this.newCookTime = cookTime;
    onSave = () => {
        this.updated.emit(this.newCookTime);
        this.showModal = false;
    }
    onClose = () => this.showModal = false;
}
