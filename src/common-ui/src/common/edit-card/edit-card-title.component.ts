import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'edit-card-title',
    standalone: true,
    template: `
        <div class="text-muted">
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCardTitleComponent {
}
