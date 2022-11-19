import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserActions, UserStoreModule } from '@assistant/common-sdk';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule
    ]
})
export class LoginComponent {

    constructor(
        private userActions: UserActions,
        private router: Router
    ) { }

    login() {
        this.userActions.login({
            id: "id",
            name: "Gilbert Gambin",
            email: "gilbertgambin@gmail.com"
        });
        this.router.navigate(['']);
    }
}
