import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'search-input',
    standalone: true,
    templateUrl: './search-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconComponent
    ]
})
export class SearchInputComponent {

    @Input() search: string | undefined = '';
    @Output() searchChange = new EventEmitter<string>();

    searchControl = new FormControl<string>('', { nonNullable: true });
    private subscription = new Subscription();

    @HostListener('keyup', ["$event"]) onKeyup(event: Event) {
        event.stopPropagation();
    }

    ngOnInit() {
        this.searchControl.setValue(this.search || '');
        this.subscription = this.searchControl.valueChanges.pipe(
            debounceTime(500)
        ).subscribe(search =>
            this.searchChange.emit(search)
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
