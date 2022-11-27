import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'not-found-actions',
    standalone: true,
    templateUrl: './not-found-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class NotFoundActionsComponent { }
