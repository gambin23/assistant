import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@assistant/common-ui';
import { financeRoutes } from './routes.module';

@Component({
    selector: 'finance-host',
    standalone: true,
    templateUrl: './host.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        NavigationComponent
    ]
})
export class HostComponent {
    routes = financeRoutes;
}
