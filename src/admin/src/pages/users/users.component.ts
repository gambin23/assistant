import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@assistant/common-sdk';
import { AvatarComponent, DateAgoPipe, ListModule, NoResultModule, SearchInputComponent } from '@assistant/common-ui';
import { UsersActions, UsersSelector } from '@assistant/admin/store';

@Component({
    selector: 'admin-users-page',
    standalone: true,
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        ListModule,
        AvatarComponent,
        SearchInputComponent,
        NoResultModule,
        DateAgoPipe
    ]
})
export default class UsersComponent implements OnInit {

    users$!: Observable<User[]>;
    isBusy$!: Observable<boolean>;
    search = '';

    constructor(
        private usersActions: UsersActions,
        private usersSelector: UsersSelector
    ) { }

    ngOnInit() {
        this.usersActions.search();
        this.users$ = this.usersSelector.users$();
        this.isBusy$ = this.usersSelector.isBusy$();
    }

    onSearch = (search: string) => this.usersActions.search(search);
}
