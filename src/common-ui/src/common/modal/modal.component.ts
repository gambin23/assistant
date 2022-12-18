import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'modal',
    standalone: true,
    templateUrl: './modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class ModalComponent {

    @Input() show = false;
    @Output() showChange = new EventEmitter<boolean>();
    @Output() closed = new EventEmitter();
    @HostListener('document:keyup.escape') onKeyUpEscape() {
        this.onClose();
    }

    onClose = () => {
        this.showChange.emit(false);
        this.closed.emit();
    }
}
