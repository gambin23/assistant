import { NgModule } from '@angular/core';
import { NoResultComponent } from './no-result.component';
import { NoResultTitleComponent } from './no-result-title.component';
import { NoResultDescriptionComponent } from './no-result-description.component';
import { NoResultActionsComponent } from './no-result-actions.component';

@NgModule({
    imports: [
        NoResultComponent,
        NoResultTitleComponent,
        NoResultDescriptionComponent,
        NoResultActionsComponent
    ],
    declarations: [],
    exports: [
        NoResultComponent,
        NoResultTitleComponent,
        NoResultDescriptionComponent,
        NoResultActionsComponent
    ],
    providers: [],
    bootstrap: []
})
export class NoResultModule { }
