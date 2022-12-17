import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[image]',
    standalone: true,
})
export class ImageDirective {

    @HostBinding('class') class = 'bone';

    private errorSrc = '/assets/image-placeholder.jpg';

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ) { }

    @HostListener('error') onError() {
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorSrc);
        this.renderer.addClass(this.el.nativeElement, 'image');
    }
}
