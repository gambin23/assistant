import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IconComponent, UserHeaderComponent } from '@assistant/common-ui';
import { App, AppsService } from '@assistant/common-sdk';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserHeaderComponent,
        IconComponent
    ]
})
export class HomeComponent implements OnInit {

    apps$!: Observable<App[]>;

    constructor(private appsService: AppsService) {}

    ngOnInit(): void {
        this.apps$ = this.appsService.getApps$();
    }
}
