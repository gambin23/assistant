import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { AppsActions, AppsSelector, ThemeService, User, UserActions } from '@assistant/common-sdk';
import { Authentication } from '@assistant/data';

@Component({
    selector: 'root',
    templateUrl: './host.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostComponent implements OnInit, OnDestroy {

    constructor(
        private themeService: ThemeService,
        private router: Router,
        private appsActions: AppsActions,
        private appsSelector: AppsSelector,
        private authentication: Authentication,
        private userActions: UserActions
    ) { }

    private activeApp = '';
    private subscription = new Subscription();

    ngOnInit(): void {
        this.themeService.register();

        this.subscription = combineLatest([this.authentication.isNewUser$, this.authentication.user$]).subscribe(([isNewUser, userData]) => {
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

        combineLatest([this.router.events, this.appsSelector.apps$()]).subscribe(([event, apps]) => {
            if (event instanceof NavigationEnd) {
                const app = event.url.split('/')[1];
                if (apps[app] && this.activeApp !== app) {
                    this.appsActions.switchApp(app);
                    this.activeApp = app;
                }
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
