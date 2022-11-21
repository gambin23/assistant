import { PreferencesSelector } from './../preferences/preferences.selector';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {

    constructor(private preferencesSelector: PreferencesSelector) { }

    register() {
        this.preferencesSelector.theme$().subscribe(value => {
            document.body.className = value ? `theme-${value}` : '';
        })
    }
}
