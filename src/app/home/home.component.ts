import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent, UserHeaderComponent } from '@assistant/common-ui';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        UserHeaderComponent,
        IconComponent
    ]
})
export class HomeComponent {


}
