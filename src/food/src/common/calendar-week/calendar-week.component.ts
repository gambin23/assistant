import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';

@Component({
    selector: 'food-calendar-week',
    standalone: true,
    templateUrl: './calendar-week.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodCalendarWeekComponent {

}
