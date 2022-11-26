import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@assistant/common-ui';

@Component({
    selector: 'dashboard-page',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:[
        IconComponent
    ]
})
export class DashboardPageComponent {

}
