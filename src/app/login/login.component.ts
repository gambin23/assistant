import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserActions, UserStoreModule } from '@assistant/common-sdk';
import { IconComponent } from '@assistant/common-ui';
import { Authentication } from '@assistant/data';
import { combineLatest, filter, Subscription, switchMap } from 'rxjs';

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
export class LoginComponent implements OnInit {

    private subscription = new Subscription();

    constructor(
        private authentication: Authentication,
        private userActions: UserActions,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscription = this.authentication.isAuthenticated$.pipe(
            filter(isAuthenticated => isAuthenticated),
            switchMap(() => combineLatest([this.authentication.isNewUser$, this.authentication.user$]))
        ).subscribe(([isNewUser, userData]) => {
            const user: User = {
                id: userData?.uid!,
                name: userData?.displayName!,
                email: userData?.email!,
                image: userData?.photoURL!,
                registeredDate: new Date(),
                lastLoginDate: new Date()
            };

            isNewUser ? this.userActions.register(user) : this.userActions.login(user.id);
            this.router.navigate(['']);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login() {
        this.authentication.login();
    }
}
