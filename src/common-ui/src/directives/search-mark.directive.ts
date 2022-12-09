import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import * as Mark from 'mark.js';

@Directive({
    selector: '[searchMark]',
    standalone: true
})
export class SearchMarkDirective implements OnChanges {

    @Input() searchMark = '';
    @Input() searchMarkConfig: Mark.MarkOptions = {};
    @Input() scrollToFirstMarked: boolean = false;

    mark!: Mark;

    constructor(private contentElementRef: ElementRef) { }

    ngOnChanges() {
        if (!this.mark) {
            this.mark = new Mark(this.contentElementRef.nativeElement);
        }

        this.mark.unmark({
            done: () => {
                this.mark.mark((this.searchMark), this.searchMarkConfig);
            }
        });
    }
}
