import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'list-item-action-right',
    standalone: true,
    template: `
            <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemActionRightComponent {

    @HostBinding('class') class = 'ms-auto';

}
