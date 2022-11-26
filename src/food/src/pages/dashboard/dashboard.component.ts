import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardHeaderComponent, IconComponent } from '@assistant/common-ui';
import { FoodCalendarDayComponent } from '../../common/calendar-day/calendar-day.component';
import { FoodCalendarWeekComponent } from '../../common/calendar-week/calendar-week.component';

@Component({
    selector: 'dashboard-page',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        DashboardHeaderComponent,
        FoodCalendarDayComponent,
        FoodCalendarWeekComponent,
        IconComponent
    ]
})
export class DashboardPageComponent {

}
