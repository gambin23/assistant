import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserSelector } from '@assistant/common-sdk';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    isAuthenticated$: Observable<boolean> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.isAuthenticated$ = this.userSelector.isAuthenticated$();
    }
}
