import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-users',
    standalone: true,
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export default class UsersComponent implements OnInit {


    constructor() { }

    ngOnInit() {
    }
}
