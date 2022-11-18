import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserActions } from '../user/store/user.actions';
import { UserSelector } from '../user/store/user.selectors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    userName$: Observable<string | undefined> | undefined;

    constructor(
        private userActions: UserActions,
        private userSelector: UserSelector
    ) { }

    ngOnInit() {
        this.userName$ = this.userSelector.userName$();
    }

    login() {
        this.userActions.login({
            id: "id",
            name: "Gilbert Gambin"
        });
    }
}
