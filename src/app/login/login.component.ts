import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserActions, UserStoreModule } from '@assistant/common-sdk';
import { IconComponent } from '@assistant/common-ui';
import { Authentication } from '@assistant/data';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule,
        IconComponent
    ]
})
export class LoginComponent {

    constructor(
        private authentication: Authentication,
        private userActions: UserActions,
        private router: Router
    ) {
        this.authentication.user$.subscribe(user => {
            this.userActions.login({
                id: user?.uid!,
                name: user?.displayName!,
                email: user?.email!,
                image: user?.photoURL!
            });
            this.router.navigate(['']);
        })
    }

    login() {
        this.authentication.login();
    }
}
