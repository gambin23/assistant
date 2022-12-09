import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'stepper-step',
    standalone: true,
    template: `
        <ng-container *ngIf="show">
            <ng-content></ng-content>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export class StepperStepComponent {
    @Input() title: string | undefined;
    @Input() set isInvalid (value: boolean) {
        this.isInvalid$.next(value);
    }

    show = false;
    isInvalid$ = new BehaviorSubject(false);
    constructor(private changeRef: ChangeDetectorRef) { }

    updateState = () => this.changeRef.markForCheck();
}
