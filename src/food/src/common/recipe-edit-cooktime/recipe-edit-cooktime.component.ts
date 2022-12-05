import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditCardModule, ListModule, ModalModule } from '@assistant/common-ui';
import { cookTimes } from '../../models/cook-time';

@Component({
    selector: 'food-recipe-edit-cooktime',
    standalone: true,
    templateUrl: './recipe-edit-cooktime.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        EditCardModule,
        ModalModule,
        ListModule
    ]
})
export class FoodRecipeEditCooktimeComponent implements OnInit {

    @Input() cookTime!: number;
    @Output() updated = new EventEmitter<number>();

    ngOnInit() {
        this.newCookTime = this.cookTime;
    }

    cookTimes = cookTimes;
    newCookTime: number | undefined;
    showModal = false;
    getCookTime = (time: number) => this.cookTimes.find(x => x.id === time);
    onEdit = () => this.showModal = true;
    onSelect = (cookTime: number) => this.newCookTime = cookTime;
    onSave = () => {
        this.updated.emit(this.newCookTime);
        this.showModal = false;
    }
    onCancel = () => this.showModal = false;
}
