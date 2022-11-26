import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'settings-card',
    standalone: true,
    templateUrl: './settings-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class SettingsCardComponent {

    @Output() clicked = new EventEmitter();

    onClicked() {
        this.clicked.emit();
    }
}
