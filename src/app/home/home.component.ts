import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from '../../common-ui/src/user-header/user-header.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        UserHeaderComponent
    ]
})
export class HomeComponent {


}
