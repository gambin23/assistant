import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'settings-card-description',
    standalone: true,
    templateUrl: './settings-card-description.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export class SettingsCardDescriptionComponent {
}
