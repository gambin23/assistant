import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';
import { ListItemActionRightComponent } from './list-item-action-right.component';

@NgModule({
    imports: [
        ListComponent,
        ListItemComponent,
        ListItemActionRightComponent
    ],
    exports: [
        ListComponent,
        ListItemComponent,
        ListItemActionRightComponent
    ]
})
export class ListModule { }
