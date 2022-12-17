import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'no-result-title',
    standalone: true,
    template: `
        <h3>
            <ng-content></ng-content>
        </h3>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class NoResultTitleComponent { }
