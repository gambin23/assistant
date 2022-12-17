import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
    selector: 'user-header',
    standalone: true,
    templateUrl: './user-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule,
        AvatarComponent
    ]
})
export class UserHeaderComponent {

    user$: Observable<User> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit() {
        this.user$ = this.userSelector.user$();
    }
}
