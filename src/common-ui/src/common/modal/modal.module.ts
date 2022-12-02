import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
    imports: [
        ModalComponent,
    ],
    declarations: [],
    exports: [
        ModalComponent,
    ],
    providers: [ModalService],
    bootstrap: []
})
export class ModalModule { }
