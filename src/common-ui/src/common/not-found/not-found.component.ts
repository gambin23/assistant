import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'not-found',
    standalone: true,
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class NotFoundComponent {
}
