import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'list-item-action, [listItemAction]',
    standalone: true,
    template: `
            <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemActionComponent {

    @HostBinding('class') class = 'ms-auto';

}
