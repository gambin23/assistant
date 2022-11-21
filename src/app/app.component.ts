import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from '@assistant/common-sdk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.themeService.register();
    }

}
