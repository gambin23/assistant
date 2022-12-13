import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';
import { ListItemActionComponent } from './list-item-action.component';

@NgModule({
    imports: [
        ListComponent,
        ListItemComponent,
        ListItemActionComponent
    ],
    exports: [
        ListComponent,
        ListItemComponent,
        ListItemActionComponent
    ]
})
export class ListModule { }
