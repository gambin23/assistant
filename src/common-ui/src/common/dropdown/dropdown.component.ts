import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, HostListener, ChangeDetectorRef } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { DropdownToggleComponent } from './dropdown-toggle.component';

@Component({
    selector: 'dropdown, [dropdown]',
    standalone: true,
    templateUrl: './dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class DropdownComponent {

    @HostBinding('class') class = 'dropdown';
    @HostBinding('class.show') get classShow() { return this.show };
    @HostBinding('attr.tabindex') tabIndex = -1;
    @ContentChild(DropdownToggleComponent) toggleComponent!: DropdownToggleComponent;
    @ContentChild(DropdownMenuComponent) menuComponent!: DropdownMenuComponent;
    @HostListener('document:keyup.escape') onKeyUpEscape() {
        this.show = false;
    }
    @HostListener('focusout') onBlur() {
        setTimeout(() => {
            this.show = false;
            this.changeRef.markForCheck();
        }, 200);
    }

    private show = false;
    private subscription = new Subscription();

    constructor(private changeRef: ChangeDetectorRef) { }

    ngAfterContentInit() {
        this.subscription.add(this.toggleComponent.clicked.subscribe(() => this.show = !this.show));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
