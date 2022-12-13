import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
    selector: 'back-button',
    standalone: true,
    templateUrl: './back-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class BackButtonComponent {


    constructor(private location: Location) { }

    onClick = () => this.location.back();
}
