import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes, User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { Observable } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserStoreModule,
        IconComponent
    ]
})
export class NavigationComponent implements OnInit {

    @Input() routes: AppRoutes | undefined;
    user$: Observable<User | undefined> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit(): void {
        this.user$ = this.userSelector.user$();
    }

}
