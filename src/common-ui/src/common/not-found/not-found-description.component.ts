import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'not-found-description',
    standalone: true,
    templateUrl: './not-found-description.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class NotFoundDescriptionComponent { }
