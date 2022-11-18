import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSelector } from './user/store/user.selectors';
import { User } from './user/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.isLoggedIn$ = this.userSelector.isLoggedIn$();
    }
}
