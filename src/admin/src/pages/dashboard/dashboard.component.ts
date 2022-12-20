import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'finance-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardComponent {

}
