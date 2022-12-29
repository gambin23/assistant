import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IconComponent } from '@assistant/common-ui';
import { Authentication } from '@assistant/data';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class LoginComponent implements OnInit, OnDestroy {

    private subscription = new Subscription();

    constructor(
        private authentication: Authentication,
        private router: Router
    ) { }

    ngOnInit() {
        this.authentication.isAuthenticated$.subscribe(() => {
            this.router.navigateByUrl('');
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login = () => {
        this.authentication.login();
    }
}
