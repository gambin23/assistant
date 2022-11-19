import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { reducers } from '@assistant/common-sdk';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RoutesModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
