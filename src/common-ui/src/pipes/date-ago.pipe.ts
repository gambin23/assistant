import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceStrict } from 'date-fns';

@Pipe({
    name: 'dateAgo',
    standalone: true
})
export class DateAgoPipe implements PipeTransform {
    transform(date: string | Date | undefined): string {
        if (!date)
            return '';

        return formatDistanceStrict(new Date(date), new Date(), { addSuffix: true });
    }
}
