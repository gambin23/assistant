import { StepperComponent } from './stepper.component';
import { NgModule } from '@angular/core';
import { StepperStepComponent } from './stepper-step.component';

@NgModule({
    imports: [
        StepperComponent,
        StepperStepComponent
    ],
    exports: [
        StepperComponent,
        StepperStepComponent
    ]
})
export class StepperModule { }
