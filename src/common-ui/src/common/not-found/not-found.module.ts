import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { NotFoundTitleComponent } from './not-found-title.component';
import { NotFoundDescriptionComponent } from './not-found-description.component';
import { NotFoundActionsComponent } from './not-found-actions.component';

@NgModule({
    imports: [
        NotFoundComponent,
        NotFoundTitleComponent,
        NotFoundDescriptionComponent,
        NotFoundActionsComponent
    ],
    declarations: [],
    exports: [
        NotFoundComponent,
        NotFoundTitleComponent,
        NotFoundDescriptionComponent,
        NotFoundActionsComponent
    ],
    providers: [],
    bootstrap: []
})
export class NotFoundModule { }
