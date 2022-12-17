import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { formatDistance } from 'date-fns';
import { NotificationsActions, NotificationsSelector, Notification, App, Dictionary, AppsSelector, NotificationFilters, NotificationView } from '@assistant/common-sdk';
import { AvatarComponent, IconComponent, ListModule, NotFoundModule, PageComponent } from '@assistant/common-ui';

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
        NotFoundModule,
        AvatarComponent
    ]
})
export class NotificationsComponent extends PageComponent<NotificationFilters> implements OnInit {

    notifications$!: Observable<Notification[]>;
    isBusy$!: Observable<boolean>;
    apps$!: Observable<Dictionary<App>>;
    view: NotificationView = 'all';

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
        this.subscribeParamsChange(() => {
            this.notifications$ = this.notificationsSelector.notifications$({
                view: this.view
            });
        });
    }

    onChangeView = () => this.setQueryParam({ view: this.view === 'all' ? 'unread' : 'all' });
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
