import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertActions, AlertSelector } from '@assistant/common-sdk';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
    selector: 'alert',
    standalone: true,
    templateUrl: './alert.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        IconComponent
    ]
})
export class AlertComponent implements OnInit, OnDestroy {

    @HostBinding('class') class = 'alerts';
    alerts: Alert[] = [];

    private subscription = new Subscription();

    constructor(
        private alertSelector: AlertSelector,
        private alertActions: AlertActions,
        private router: Router,
        private changeRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.subscription = this.alertSelector.alerts$().subscribe(alerts => {
            this.alerts = alerts;
            this.changeRef.markForCheck();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onClick = (alert: Alert) => {
        if (alert.link) {
            this.router.navigateByUrl(alert.link);
            this.alertActions.remove(alert);
        }
    }

    onClose = (event: Event, alert: Alert) => {
        event.preventDefault();
        event.stopPropagation();
        this.alertActions.remove(alert);
    }

    iconName = (alert: Alert) => {
        switch (alert.type) {
            case 'success':
                return 'circle-check';
            case 'error':
                return 'circle-xmark';
            case 'warning':
                return 'triangle-exclamation';
            default:
                return '';
        }
    }
}
