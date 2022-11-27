import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'settings-card-title',
    standalone: true,
    templateUrl: './settings-card-title.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export class SettingsCardTitleComponent {
}
