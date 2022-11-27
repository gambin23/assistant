import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'not-found-title',
    standalone: true,
    templateUrl: './not-found-title.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class NotFoundTitleComponent { }
