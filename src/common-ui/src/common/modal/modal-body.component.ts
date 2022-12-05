import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'modal-body',
    standalone: true,
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalBodyComponent {

    @HostBinding('class') class = 'modal-body';
}
