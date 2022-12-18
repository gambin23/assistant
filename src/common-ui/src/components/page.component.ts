import { ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { isValid } from 'date-fns';

export abstract class PageComponent<T> {

    queryParams: Partial<T> = {};
    private initialQueryParams: Partial<T> = {};

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected title: Title,
        protected changeRef: ChangeDetectorRef
    ) { }

    protected queryParamsSubscribe(func?: () => void) {
        this.route.queryParams.subscribe(params => {
            this.queryParams = { ...this.initialQueryParams };
            Object.keys(params).map(key => {
                let value: any = params[key]
                if (key.includes('date')) {
                    if (!isValid(new Date(value))) {
                        return;
                    }
                    value = new Date(value);
                }
                if (key.startsWith('is')) {
                    value = value === 'true';
                }

                this.queryParams[key as keyof T] = value;
            })
            func && func();
            this.changeRef.markForCheck();
        });
    }

    protected queryParamsInit = (params: Partial<T>) => {
        this.queryParams = params;
        this.initialQueryParams = { ...params };
    }

    protected queryParamsSet = (queryParams: Partial<T>) => this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
    });

    protected setTitle = (title: string) => this.title.setTitle(`Assistant | ${title}`)
}
