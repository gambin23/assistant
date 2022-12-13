import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppRoutes, AppsSelector, User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { Authentication } from '@assistant/data';
import { Observable } from 'rxjs';
import { IconComponent } from '../../common/icon/icon.component';

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
    isAuthenticated$!: Observable<boolean>;
    user$!: Observable<User>;
    activeApp$!: Observable<App>;
    activeRoutes$!: Observable<AppRoutes>;
    showSidebar = true;

    constructor(
        private authentication: Authentication,
        private userSelector: UserSelector,
        private appsSelector: AppsSelector
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authentication.isAuthenticated$;
        this.user$ = this.userSelector.user$();
        this.activeApp$ = this.appsSelector.activeApp$();
        this.activeRoutes$ = this.appsSelector.activeRoutes$();
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

}
