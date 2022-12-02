import { TemplateRef } from '@angular/core';

export interface ModalConfig {
    show?: boolean;
    title?: string;
    template?: TemplateRef<string>
}
