import { NgModule } from '@angular/core';
import { EditCardComponent } from './edit-card.component';
import { EditCardTitleComponent } from './edit-card-title.component';
import { EditCardContentComponent } from './edit-card-content.component';
import { EditCardActionComponent } from './edit-card-action.component';

@NgModule({
    imports: [
        EditCardComponent,
        EditCardTitleComponent,
        EditCardContentComponent,
        EditCardActionComponent
    ],
    exports: [
        EditCardComponent,
        EditCardTitleComponent,
        EditCardContentComponent,
        EditCardActionComponent
    ]
})
export class EditCardModule { }
