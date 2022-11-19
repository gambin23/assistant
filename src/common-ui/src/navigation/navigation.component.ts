import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User, UserSelector, UserStoreModule } from '@assistant/common-sdk';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserStoreModule
    ]
})
export class NavigationComponent implements OnInit {

    @Input() routes: Routes | undefined;
    user$: Observable<User | undefined> | undefined;

    constructor(private userSelector: UserSelector) { }

    ngOnInit(): void {
        this.user$ = this.userSelector.user$();
    }

}
