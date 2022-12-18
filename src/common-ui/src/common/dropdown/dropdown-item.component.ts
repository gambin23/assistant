import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'dropdown-item, [dropdownItem]',
    standalone: true,
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class DropdownItemComponent {
    @HostBinding('class') class = 'dropdown-item';
}
