import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class FoodRecipeEditCooktimeComponent implements OnInit {

    @Input() cookTime!: number;
    @Output() updated = new EventEmitter<number>();

    cookTimes = cookTimes;
    newCookTime!: number;
    showModal = false;

    ngOnInit() {
        this.newCookTime = this.cookTime;
    }

    getCookTime = getCookTime;
    onEdit = () => this.showModal = true;
    onSelect = (cookTime: number) => this.newCookTime = cookTime;
    onSave = () => {
        this.updated.emit(this.newCookTime);
        this.showModal = false;
    }
    onCancel = () => this.showModal = false;
}
