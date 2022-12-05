import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'modal-header',
    standalone: true,
    template: `
        <div class="modal-title h4">
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHeaderComponent {

    @HostBinding('class') class = 'modal-header';
}
