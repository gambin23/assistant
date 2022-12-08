import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export abstract class EditCardBaseComponent<T> {

    @Input() readonly = false;
    @Output() updated = new EventEmitter<T>();

    oldValue!: T;
    newValue!: T;
    showModal = false;

    initValue = (value: T) => this.oldValue = this.newValue = value;
    onEdit = () => this.showModal = true;
    onClose = () => this.showModal = false;
    onSave = () => {
        this.updated.emit(this.newValue);
        this.showModal = false;
    }
}
