import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppRoutes, AppsSelector, Dictionary, User, UserSelector } from '@assistant/common-sdk';
import { Authentication } from '@assistant/data';
import { Observable } from 'rxjs';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { DropdownModule } from '../../common/dropdown/dropdown.module';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
    selector: 'navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        AvatarComponent,
        IconComponent,
        DropdownModule
    ]
})
export class NavigationComponent implements OnInit {

    @Input() routes: AppRoutes | undefined;
    isAuthenticated$!: Observable<boolean>;
    user$!: Observable<User>;
    apps$!: Observable<Dictionary<App>>;
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
        this.apps$ = this.appsSelector.apps$();
        this.activeApp$ = this.appsSelector.activeApp$();
        this.activeRoutes$ = this.appsSelector.activeRoutes$();
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

}
