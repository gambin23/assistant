import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { formatDistance } from 'date-fns';
import { NotificationsActions, NotificationsSelector, Notification, App, Dictionary, AppsSelector } from '@assistant/common-sdk';
import { BackButtonComponent, IconComponent, ListModule, PageComponent } from '@assistant/common-ui';
import { NotificationsQueryparams, View } from './notifications.model';

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
        BackButtonComponent
    ]
})
export class NotificationsComponent extends PageComponent<NotificationsQueryparams> implements OnInit {

    notifications$!: Observable<Notification[]>;
    isBusy$!: Observable<boolean>;
    apps$!: Observable<Dictionary<App>>;
    view: View = 'all';

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
        this.notifications$ = this.notificationsSelector.notifications$();
        this.isBusy$ = this.notificationsSelector.isBusy$();
        this.apps$ = this.appsSelector.apps$();
        this.subscribeParamsChange();
    }

    onChangeView = () => this.setQueryParam({ view: this.view === 'all' ? 'unread' : 'all' });
    formatDate = (date: Date) => formatDistance(new Date(), date);
    onClick = (notification: Notification) => {
        if (notification.link) {
            this.router.navigateByUrl(notification.link);
    }
        this.notificationsActions.read(notification.id);
    }
    onRead = (event: Event, id: string) => {
        event.preventDefault();
        event.stopPropagation();
        this.notificationsActions.read(id);
    }
}
