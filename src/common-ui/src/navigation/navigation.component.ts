import { AppSelector } from './../../../common-sdk/src/app/app.selector';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppRoutes, User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { Observable } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserStoreModule,
        IconComponent
    ]
})
export class NavigationComponent implements OnInit {

    @Input() routes: AppRoutes | undefined;
    isAuthenticated$!: Observable<boolean | undefined>;
    user$!: Observable<User | undefined>;
    activeApp$!: Observable<App | undefined>;
    showSidebar = true;

    constructor(
        private userSelector: UserSelector,
        private appSelector: AppSelector
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.userSelector.isAuthenticated$();
        this.user$ = this.userSelector.user$();
        this.activeApp$ = this.appSelector.activeApp$();
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

}
