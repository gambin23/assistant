import { ChangeDetectionStrategy, Component, HostBinding, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        IconComponent
    ]
})
export class AlertComponent implements OnInit, OnDestroy {

    alert: Alert | undefined;
    show = true;

    @HostBinding('class') class = 'alert-hero alert-primary';
    @HostBinding('class.show') get showClass() { return this.show; };
    @HostBinding('class.alert-error') get errorClass() { return this.alert?.type === 'error'; };
    @HostBinding('class.alert-success') get successClass() { return this.alert?.type === 'success'; };
    @HostBinding('class.alert-warning') get warningClass() { return this.alert?.type === 'warning'; };

    private subscription = new Subscription();

    constructor(
        private alertSelector: AlertSelector,
        private alertActions: AlertActions,
        private changeRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.subscription = this.alertSelector.alert$().subscribe(alert => {
            this.alert = alert;
            this.show = !!alert;
            this.changeRef.markForCheck();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onClose = () => this.alertActions.clear();
    iconName = () => {
        switch (this.alert?.type) {
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
