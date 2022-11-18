import { NgModule } from '@angular/core';
import { UserSelector } from './user.selectors';
import { UserActions } from './user.actions';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        UserActions,
        UserSelector
    ],
    bootstrap: []
})
export class UserStoreModule { }
