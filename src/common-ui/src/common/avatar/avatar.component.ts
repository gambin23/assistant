import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'avatar',
    standalone: true,
    templateUrl: './avatar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
    ]
})
export class AvatarComponent {

    @Input() value!: string;
    @Input() set size(value: 16 | 24 | 32 | 48 | 64 | 96 | 128) {
        this.sizeClass = `avatar-${value}`;
    };

    @Input() set theme(value: 'primary' | 'secondary' | 'dark') {
        this.themeClass = value;
    };

    sizeClass = 'avatar-32';
    themeClass = 'primary';

    @HostBinding('class') get classes() { return `avatar ${this.sizeClass} text-${this.themeClass} bg-${this.themeClass}-l-50 rounded-circle bone`; };

    generateCode = (value: string) => {
        if (Number(value))
            return value;

        const names = value.split(/([0-9 ])+/g);
        const initials = names
            .filter(n => n !== " ")
            .map(n => n.substring(0, 1).toUpperCase());

        return initials ? initials.slice(0, 3).join("") : value.slice(0, 2);
    }
}
