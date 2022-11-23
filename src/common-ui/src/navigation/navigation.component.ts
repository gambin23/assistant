import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes, AppsSelector, EnhancedApp, User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
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
    activeApp$!: Observable<EnhancedApp | undefined>;
    showSidebar = true;

    constructor(
        private userSelector: UserSelector,
        private appsSelector: AppsSelector
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.userSelector.isAuthenticated$();
        this.user$ = this.userSelector.user$();
        this.activeApp$ = this.appsSelector.activeApp$();
    }

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

}
