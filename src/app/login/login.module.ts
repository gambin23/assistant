import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserStoreModule } from '@assistant/common-sdk';

@NgModule({
    imports: [
        CommonModule,
        UserStoreModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [],
    bootstrap: []
})
export class LoginModule { }
