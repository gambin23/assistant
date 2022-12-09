import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BrowserTitleStrategy extends TitleStrategy {
    constructor(
        private title: Title,
        @Inject('prefix') prefix: string
    ) {
        super();
        this.prefix = prefix;
    }

    prefix: string | undefined;

    override updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState);
        if (title !== undefined) {
            this.title.setTitle(this.prefix ? `${this.prefix} ${title}` : title);
        }
    }
}
