import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { UserActions } from '../user/store/user.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    constructor(
        private userActions: UserActions
    ) { }

    login() {
        this.userActions.login({
            id: "id",
            name: "Gilbert Gambin"
        });
    }
}
