import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@assistant/common-sdk';
import { AvatarComponent, DateAgoPipe, ListModule, NoResultModule, SearchInputComponent } from '@assistant/common-ui';
import { UsersSelector } from '../../store/users/users.selector';
import { UsersActions } from '../../store/users/users.actions';

@Component({
    selector: 'admin-user-page',
    standalone: true,
    templateUrl: './user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ListModule,
        AvatarComponent,
        SearchInputComponent,
        NoResultModule,
        DateAgoPipe
    ]
})
export default class UserComponent implements OnInit {

    user$!: Observable<User | undefined>;
    isBusy$!: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private usersActions: UsersActions,
        private usersSelector: UsersSelector
    ) { }

    ngOnInit() {
        this.usersActions.get(this.route.snapshot.params['id']);
        this.user$ = this.usersSelector.user$();
        this.isBusy$ = this.usersSelector.isBusy$();
    }
}
