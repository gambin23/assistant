import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { UserStoreModule } from '@assistant/common-sdk';
import { IconComponent } from '@assistant/common-ui';
import { Authentication } from '@assistant/data';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        UserStoreModule,
        IconComponent
    ]
})
export class LoginComponent {

    constructor(private authentication: Authentication) { }

    login = () => this.authentication.login();
}
