import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dashboard-page',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {

}
