import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'settings-card-description',
    standalone: true,
    template: `
    <div class="caption">
        <ng-content></ng-content>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export class SettingsCardDescriptionComponent {
}
