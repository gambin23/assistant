import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chunk } from "lodash-es";
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, isSameDay, isSameMonth, startOfMonth, subDays, subMonths } from 'date-fns';
import { ModalModule } from '../modal/modal.module';

@Component({
    selector: 'date-picker-modal',
    standalone: true,
    templateUrl: './date-picker-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ModalModule
    ]
})
export class DatePickerModalComponent {

    @Input() show = false;
    @Input() date = new Date();
    @Input() title?: string;
    @Output() showChange = new EventEmitter<boolean>();
    @Output() dateChange = new EventEmitter<Date>();

    weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    chunk = chunk;
    addMonths = addMonths;
    subMonths = subMonths;

    onSelectDay = (date: Date) => {
        this.dateChange.emit(date);
        this.showChange.emit(false);
    }
    onCloseModal = () => this.showChange.emit(false);
    onIncrementMonth = () => this.date = addMonths(startOfMonth(this.date), 1);
    onDecrementMonth = () => this.date = subMonths(startOfMonth(this.date), 1);
    isActiveDay = (day: Date) => isSameDay(this.date, day);
    isDisabledDay = (day: Date) => !isSameMonth(this.date, day);
    formatDate = (date: Date) => format(date, 'MMM yyyy');

    days = (date: Date) => {
        const firstDay = startOfMonth(date);
        const days = eachDayOfInterval({ start: firstDay, end: endOfMonth(firstDay) });
        while (days[0].getDay() !== 1) {
            days.unshift(subDays(days[0], 1));
        }
        while (days[days.length - 1].getDay() !== 0) {
            days.push(addDays(days[days.length - 1], 1));
        }
        return days;
    }
}
