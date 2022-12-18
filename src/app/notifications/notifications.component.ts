import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { formatDistance } from 'date-fns';
import { NotificationsActions, NotificationsSelector, Notification, App, Dictionary, AppsSelector, NotificationFilters, NotificationView } from '@assistant/common-sdk';
import { AvatarComponent, DropdownModule, IconComponent, ListModule, NoResultModule, PageComponent } from '@assistant/common-ui';

@Component({
    selector: 'notifications',
    standalone: true,
    templateUrl: './notifications.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        ListModule,
        IconComponent,
        NoResultModule,
        AvatarComponent,
        DropdownModule
    ]
})
export class NotificationsComponent extends PageComponent<NotificationFilters> implements OnInit {

    notifications$!: Observable<Notification[]>;
    isBusy$!: Observable<boolean>;
    apps$!: Observable<Dictionary<App>>;

    constructor(
        router: Router,
        route: ActivatedRoute,
        title: Title,
        changeRef: ChangeDetectorRef,
        private notificationsSelector: NotificationsSelector,
        private notificationsActions: NotificationsActions,
        private appsSelector: AppsSelector
    ) {
        super(router, route, title, changeRef)
    }

    ngOnInit() {
        this.isBusy$ = this.notificationsSelector.isBusy$();
        this.apps$ = this.appsSelector.apps$();

        this.queryParamsInit({
            view: 'all'
        });
        this.queryParamsSubscribe(() => {
            this.notifications$ = this.notificationsSelector.notifications$({
                view: this.queryParams.view
            });
        });
    }

    onChangeView = () => this.queryParamsSet({ view: this.queryParams.view === 'all' ? 'unread' : 'all' });
    formatDate = (date: Date) => formatDistance(date, new Date(), { addSuffix: true });
    onClick = (notification: Notification) => {
        if (notification.link) {
            this.router.navigateByUrl(notification.link);
        }
        this.notificationsActions.read(notification.id);
    }
    onRead = (event: Event, notification: Notification) => {
        event.preventDefault();
        event.stopPropagation();

        if (!notification.read) {
            this.notificationsActions.read(notification.id);
        }
    }
}
