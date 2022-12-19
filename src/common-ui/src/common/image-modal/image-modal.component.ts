import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalModule } from '../modal/modal.module';
import { ImageDirective } from '../../directives/image.directive';

@Component({
    selector: 'image-modal',
    standalone: true,
    templateUrl: './image-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ModalModule,
        ImageDirective
    ]
})
export class ImageModalComponent {
    @Input() show = false;
    @Input() src: string | undefined;
    @Output() showChange = new EventEmitter<boolean>();

    onClose = () => {
        this.showChange.emit(false);
    }
}
