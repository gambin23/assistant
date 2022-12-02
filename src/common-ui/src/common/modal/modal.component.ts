import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalConfig } from './modal.config';
import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    standalone: true,
    templateUrl: './modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class ModalComponent implements OnInit {
    constructor(private modalService: ModalService) { }

    config$!: Observable<ModalConfig>;

    ngOnInit() {
        this.config$ = this.modalService.config$;
    }

    onClose() {
        this.modalService.hide();
    }
}
