import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';

@NgModule({
    imports: [
        ListComponent,
        ListItemComponent
    ],
    exports: [
        ListComponent,
        ListItemComponent
    ]
})
export class ListModule { }
