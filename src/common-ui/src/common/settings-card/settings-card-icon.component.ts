import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'settings-card-icon',
    standalone: true,
    template: `
        <icon type="solid" [name]="icon"></icon>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class SettingsCardIconComponent {
    @Input() icon!: string;
}
