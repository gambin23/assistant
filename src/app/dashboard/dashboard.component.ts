import { UserHeaderComponent } from './../../common-ui/src/user-header/user-header.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        UserHeaderComponent
    ]
})
export class DashboardComponent {


}
