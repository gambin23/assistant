import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
    selector: 'edit-card-action',
    standalone: true,
    template: `
        <div class="btn btn-light" (click)="onClick()">
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCardActionComponent {

    @HostBinding('class') class = 'ms-auto';
    @Output() clicked = new EventEmitter();

    onClick = () => this.clicked.emit();
}
