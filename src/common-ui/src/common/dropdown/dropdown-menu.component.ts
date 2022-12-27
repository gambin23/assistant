import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
    selector: 'dropdown-menu, [dropdownMenu]',
    standalone: true,
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class DropdownMenuComponent {
    @Output() clicked = new EventEmitter();
    @HostBinding('class') class = 'dropdown-menu';

    @HostListener('click', ['$event']) onClick(e: Event) {
        this.clicked.emit()
    }
}
