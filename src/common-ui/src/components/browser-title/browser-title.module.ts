import { BrowserTitleStrategy } from './browser-title';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@NgModule()
export class BrowserTitleModule {
    static withPrefix(prefix: string): ModuleWithProviders<BrowserTitleModule> {
        return {
            ngModule: BrowserTitleModule,
            providers: [
                {
                    provide: TitleStrategy,
                    useClass: BrowserTitleStrategy
                },
                {
                    provide: 'prefix',
                    useValue: prefix
                }
            ]
        }
    }
}
