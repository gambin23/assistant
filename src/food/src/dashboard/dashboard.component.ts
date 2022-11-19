import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'food-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
