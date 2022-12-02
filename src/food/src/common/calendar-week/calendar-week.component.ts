import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';
import { Calendar } from '../../models/calendar';

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

    days: Calendar = {
        "01-12-2022": {
            breakfast: "1",
            lunch: "2",
            dinner: "2"
        },
        "02-12-2022": {
            breakfast: "1",
            lunch: "2",
            dinner: "2"
        }
    }
}
