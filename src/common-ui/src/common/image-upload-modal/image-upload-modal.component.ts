import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../modal/modal.module';
import { IconComponent } from '../icon/icon.component';
import { StorageData } from '@assistant/data';
import { Subscription, finalize } from 'rxjs';

@Component({
    selector: 'image-upload-modal',
    standalone: true,
    templateUrl: './image-upload-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent,
        ModalModule
    ]
})
export class ImageUploadModalComponent implements OnDestroy {
    @Input() show = false;
    @Input() imagePath = '';
    @Input() imageName = '';
    @Output() showChange = new EventEmitter<boolean>();
    @Output() uploaded = new EventEmitter<string>();
    @ViewChild('imageInput') imageInput!: ElementRef;

    image?: string;
    file?: File;
    isBusy = false;
    private subscription = new Subscription();

    constructor(
        private changeRef: ChangeDetectorRef,
        private storageData: StorageData
    ) { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onBrowseFiles = () => this.imageInput.nativeElement.click();
    onClose = () => this.showChange.emit(false);

    onUpload = () => {
        this.isBusy = true;
        this.changeRef.markForCheck();

        const path = `${this.imagePath}/${this.imageName}.${this.file!.name.split('.').pop()?.toLowerCase()}`
        this.subscription.add(this.storageData.uploadImage$(path, this.file!)
            .pipe(finalize(() => {
                this.isBusy = false;
                this.changeRef.markForCheck();
            }))
            .subscribe(url => {
                this.showChange.emit(false);
                this.uploaded.emit(url)
            }));
    }

    onSetFile = (e: Event) => {
        var files = (<HTMLInputElement>e.target).files!;
        this.handleFile(files[0]);
    }

    onDropFile = (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        this.handleFile(e.dataTransfer?.files[0]!);
    }

    onDragoverFile = (e: DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer!.dropEffect = 'copy';
    }

    private handleFile = (file: File) => {
        if (file?.type.match(/image.*/)) {
            var reader = new FileReader();
            reader.onload = (loadEvent) => {
                this.image = loadEvent.target?.result as string;
                this.changeRef.markForCheck();
            }
            reader.readAsDataURL(file);
            this.file = file;
        }
    }
}
