import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'dropdown-toggle, [dropdownToggle]',
    standalone: true,
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class DropdownToggleComponent {

    @Output() clicked = new EventEmitter();

    @HostListener('click') onClick() {
        this.clicked.emit()
    }
}
