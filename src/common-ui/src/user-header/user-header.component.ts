import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { Observable } from 'rxjs';

@Component({
    selector: 'user-header',
    standalone: true,
    templateUrl: './user-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule
    ]
})
export class UserHeaderComponent {

    user$: Observable<User> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.user$ = this.userSelector.user$();
    }
}
