import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationsActions } from '@assistant/common-sdk';
import { NotificationsComponent } from './notifications.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: NotificationsComponent
        }]),
        NotificationsComponent
    ],
    exports: [NotificationsComponent]
})
export class NotificationsModule {

    constructor(private notificationsActions:NotificationsActions) {
        this.notificationsActions.load();
    }
}
