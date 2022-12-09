import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList, OnDestroy, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { StepperStepComponent } from './stepper-step.component';

@Component({
    selector: 'stepper',
    standalone: true,
    templateUrl: './stepper.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ],
})
export class StepperComponent implements OnInit, OnDestroy, AfterContentInit {
    @Input() step = 0;
    @Output() completed = new EventEmitter();
    @ContentChildren(StepperStepComponent) steps!: QueryList<StepperStepComponent>;

    step$ = new BehaviorSubject(this.step);
    title = 'Step 1';
    nextTitle = 'Step 2';
    disableNextStep$ = of(false);

    private subscription = new Subscription();

    constructor() { }

    ngOnInit() {
        this.step$.next(this.step);
    }

    ngAfterContentInit(): void {
        this.subscription = this.step$.subscribe(step => {
            this.steps.map((x, i) => {
                x.show = step === i;
                x.updateState();

                if (i === step) {
                    this.title = x.title || `Step ${step + 1}`;
                    this.disableNextStep$ = x.isInvalid$;
                }

                if (i === step + 1) {
                    this.nextTitle = x.title || `Step ${step + 1}`;
                }

                if (step === this.steps.length - 1) {
                    this.nextTitle = '';
                }
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onNext = () => {
        if (this.step$.value === this.steps.length - 1) {
            this.completed.emit();
        } else {
            this.step$.next(this.step$.value + 1);
        }
    }
    onBack = () => this.step$.next(this.step$.value - 1);
    stepperProgress = () => Math.floor((this.step$.value + 1) / this.steps.length * 100);
}
