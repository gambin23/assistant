import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { IconSize, IconType } from './icon.model';

@Component({
    selector: 'icon',
    standalone: true,
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class IconComponent implements OnChanges {

    @Input() name: string | undefined;
    @Input() type: IconType | undefined;
    @Input() size: IconSize | undefined;

    classes = '';

    ngOnChanges() {
        if (this.size) {
            this.classes = `fa-${this.name} fa-${this.type} fa-${this.size}`;
        } else {
            this.classes = `fa-${this.name} fa-${this.type}`;
        }
    }
}
