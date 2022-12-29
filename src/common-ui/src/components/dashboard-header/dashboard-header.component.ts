import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserSelector } from '@assistant/common-sdk';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
    selector: 'dashboard-header',
    standalone: true,
    templateUrl: './dashboard-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        AvatarComponent
    ]
})
export class DashboardHeaderComponent {

    user$: Observable<User> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.user$ = this.userSelector.user$();
    }
}
