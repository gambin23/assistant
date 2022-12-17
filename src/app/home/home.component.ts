import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvatarComponent, IconComponent, SettingsCardModule, UserHeaderComponent } from '@assistant/common-ui';
import { App, AppsSelector, Dictionary, NotificationsSelector } from '@assistant/common-sdk';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserHeaderComponent,
        IconComponent,
        SettingsCardModule,
        AvatarComponent
    ]
})
export class HomeComponent implements OnInit {

    apps$!: Observable<Dictionary<App>>;
    notificationsCount$!: Observable<number>;

    constructor(
        private appsSelector: AppsSelector,
        private notificationsSelector: NotificationsSelector
    ) { }

    ngOnInit(): void {
        this.apps$ = this.appsSelector.apps$();
        this.notificationsCount$ = this.notificationsSelector.notificationsCount$();
    }
}
