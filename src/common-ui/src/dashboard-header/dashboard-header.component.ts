import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserSelector, UserStoreModule } from '@assistant/common-sdk';

@Component({
    selector: 'dashboard-header',
    standalone: true,
    templateUrl: './dashboard-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule
    ]
})
export class DashboardHeaderComponent {

    user$: Observable<User> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.user$ = this.userSelector.user$();
    }
}
