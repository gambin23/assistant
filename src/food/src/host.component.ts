import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@assistant/common-ui';
import { foodRoutes } from './routes.module';

@Component({
    selector: 'food-host',
    standalone: true,
    templateUrl: './host.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        NavigationComponent
    ]
})
export class HostComponent {
    routes = foodRoutes;
}
