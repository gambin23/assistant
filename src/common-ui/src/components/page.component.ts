import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isValid } from 'date-fns';

export abstract class PageComponent<T> {
    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected changeRef: ChangeDetectorRef
    ) { }

    protected queryParamsChange(func?: () => void) {
        this.route.queryParams.subscribe(params => {
            Object.keys(params).map(key => {
                if ((<any>this)[key]) {

                    let value: any = params[key]
                    if (key.includes('date')) {
                        if (!isValid(new Date(value))) {
                            return;
                        }
                        value = new Date(value);
                    }

                    (<any>this)[key] = value;
                }
            })
            func && func();
            this.changeRef.markForCheck();
        });
    }

    protected setQueryParam = (queryParams: Partial<T>) => this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
    });
}