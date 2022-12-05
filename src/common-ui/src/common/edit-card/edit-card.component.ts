import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalModule } from '../modal/modal.module';

@Component({
    selector: 'edit-card',
    standalone: true,
    templateUrl: './edit-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ModalModule
    ]
})
export class EditCardComponent  {

    @Input() readonly = false;
}
