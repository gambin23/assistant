import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';

@Component({
    selector: 'food-calendar-day',
    standalone: true,
    templateUrl: './calendar-day.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodCalendarDayComponent {

}
