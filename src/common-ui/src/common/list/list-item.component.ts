import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'list-item',
    standalone: true,
    template: `
            <ng-content></ng-content>
            <ng-content selector="list-item-action-right"></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

    @HostBinding('class') class = 'list-group-item';

}
