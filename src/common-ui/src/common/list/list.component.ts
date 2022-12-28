import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ModalModule } from '../modal/modal.module';

@Component({
    selector: 'list, [list]',
    standalone: true,
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ModalModule
    ]
})
export class ListComponent  {

    @HostBinding('class') class = 'list-group';

}
