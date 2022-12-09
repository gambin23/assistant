import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchList',
    standalone: true
})
export class SearchListPipe implements PipeTransform {
    transform<T>(value: T[], search: string, key: keyof T): T[] {
        return value.filter(x => (<string>x[key]).toLowerCase().includes(search.toLowerCase()));
    }
}
