import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: SubscriptionComponent
        }]),
        SubscriptionComponent
    ],
    exports: [SubscriptionComponent]
})
export class SubscriptionModule {

    constructor() {
    }
}
