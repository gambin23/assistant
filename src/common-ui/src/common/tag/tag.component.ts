import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'tag',
    standalone: true,
    templateUrl: './tag.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class TagComponent {

    @HostBinding('class') class = 'tag';
}
