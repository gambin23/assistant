import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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

    @Input() title: string | undefined;
    @Input() description: string | undefined;
    @Output() clicked = new EventEmitter();

    onClicked() {
        this.clicked.emit();
    }
}
