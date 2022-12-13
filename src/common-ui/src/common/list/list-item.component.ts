import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

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

    @Input() active = false;
    @HostBinding('class') class = 'list-group-item';
    @HostBinding('class.active') get classActive() { return this.active };
}
