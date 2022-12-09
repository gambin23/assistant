import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'search-input',
    standalone: true,
    templateUrl: './search-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent
    ]
})
export class SearchInputComponent {

    @Input() search = '';
    @Output() searchChange = new EventEmitter<string>();

    onSearch =(search: string) => this.searchChange.emit(search);
}
