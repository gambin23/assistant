import { Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Authentication } from '@assistant/data';
import { UserActions } from '@assistant/common-sdk';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        UserActions
    ],
    templateUrl: './logout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent {

    constructor(
        private authentication: Authentication,
        private userActions: UserActions,
        private router: Router,
        private location: Location
    ) { }

    logout() {
        this.authentication.logout$().subscribe(() => {
            this.userActions.logout();
            this.router.navigate(['login'])
        })
    }

    cancel() {
        this.location.back();
    }
}
