import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { DropdownToggleComponent } from './dropdown-toggle.component';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item.component';

@NgModule({
    imports: [
        DropdownComponent,
        DropdownToggleComponent,
        DropdownMenuComponent,
        DropdownItemComponent
    ],
    exports: [
        DropdownComponent,
        DropdownToggleComponent,
        DropdownMenuComponent,
        DropdownItemComponent
    ]
})
export class DropdownModule { }
