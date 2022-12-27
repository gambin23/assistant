import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Notification, AppsSelector, App, Dictionary } from '@assistant/common-sdk';
import { ListModule, SettingsCardModule, IconComponent, DropdownModule } from '@assistant/common-ui';
import { Subscription, SubscriptionLength, SubscriptionType, subscriptionLength, subscriptionsSkeleton } from './subscription.model';

@Component({
    selector: 'subscription',
    standalone: true,
    templateUrl: './subscription.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        ListModule,
        SettingsCardModule,
        IconComponent,
        DropdownModule
    ]
})
export class SubscriptionComponent implements OnInit {

    apps$!: Observable<Dictionary<App>>;
    subscriptions!: Subscription[];
    subscriptionLength = subscriptionLength;
    activeApp = 'food';
    activeSubscription: SubscriptionType = 'free';
    activeSubscriptionLength = subscriptionLength[0];

    constructor(
        private appsSelector: AppsSelector
    ) { }

    ngOnInit() {
        this.apps$ = this.appsSelector.apps$();
        this.subscriptions = subscriptionsSkeleton;
    }

    onChangeApp = (app: string) => this.activeApp = app;
    onChangeSubscriptionLength = (item:SubscriptionLength) => this.activeSubscriptionLength = item;
}
