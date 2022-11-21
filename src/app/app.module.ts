import { AppState } from './../common-sdk/src/store/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { reducers, ThemeService } from '@assistant/common-sdk';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';

export const localStorageSyncReducer = (reducer: ActionReducer<any>) => localStorageSync({
    keys: ['user', 'preferences'],
    rehydrate: true
})(reducer);

const metaReducers: Array<MetaReducer<AppState, any>> = [localStorageSyncReducer];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument()
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
