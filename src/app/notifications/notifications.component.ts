import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { formatDistance } from 'date-fns';
import { NotificationsActions, NotificationsSelector, Notification } from '@assistant/common-sdk';
import { BackButtonComponent, IconComponent, ListModule } from '@assistant/common-ui';

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
export class NotificationsComponent implements OnInit {

    notifications$!: Observable<Notification[]>
    isBusy$!: Observable<boolean>
    view: 'all' | 'unread' = 'all';

    constructor(
        private notificationsSelector: NotificationsSelector,
        private notificationsActions: NotificationsActions
    ) { }

    ngOnInit() {
        this.notifications$ = this.notificationsSelector.notifications$();
        this.isBusy$ = this.notificationsSelector.isBusy$();
    }

    onChangeView = () => this.view = this.view === 'all' ? 'unread' : 'all';
    formatDate = (date: Date) => formatDistance(new Date, date);
}
