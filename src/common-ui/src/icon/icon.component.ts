import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconSize, IconType } from './icon.model';

@Component({
    selector: 'icon',
    standalone: true,
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class IconComponent {

    @Input() set name(value: string | undefined) {
        this.classes = this.classes + ` fa-${value}`;
    };

    @Input() set size(value: IconSize | undefined) {
        this.classes = this.classes + ` fa-${value}`;
    };

    @Input() set type(value: IconType | undefined) {
        this.classes = this.classes + ` fa-${value}`;
    };

    classes = '';
}
