import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCardBaseComponent, EditCardModule, IconComponent, ListModule, ModalModule } from '@assistant/common-ui';
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
export class FoodRecipeEditCooktimeComponent extends EditCardBaseComponent<number> {

    @Input() set cookTime(value: number | undefined) { this.initValue(value || 0) };

    cookTimes = cookTimes;

    getCookTime = getCookTime;
    onSelect = (cookTime: number) => this.newValue = cookTime;

}
