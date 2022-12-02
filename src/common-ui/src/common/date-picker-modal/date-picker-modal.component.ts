import { ChangeDetectionStrategy, Component, Input, Output, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chunk } from "lodash-es";
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, isSameDay, isSameMonth, startOfMonth, subDays, subMonths } from 'date-fns';
import { ModalService } from '../modal/modal.service';

@Component({
    selector: 'date-picker-modal',
    standalone: true,
    templateUrl: './date-picker-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule]
})
export class DatePickerModalComponent {

    @Input() date = new Date();
    @Input() title?: string;
    @Output() dateChange = new EventEmitter<Date>();

    @ViewChild('modal') modal!: TemplateRef<string>;

    weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    chunk = chunk;
    addMonths = addMonths;
    subMonths = subMonths;

    constructor(private modalService: ModalService) { }

    onShow() {
        this.modalService.show({ title: this.title, template: this.modal });
    }

    onSelectDay(date: Date) {
        this.date = date;
        this.dateChange.emit(date);
        this.modalService.hide();
    }

    onIncrementMonth() {
        this.date = addMonths(startOfMonth(this.date), 1);
    }

    onDecrementMonth() {
        this.date = subMonths(startOfMonth(this.date), 1);
    }

    isActiveDay(day: Date) {
        return isSameDay(this.date, day);
    }

    isDisabledDay(day: Date) {
        return !isSameMonth(this.date, day);
    }

    days(date: Date) {
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

    formatDate(date: Date) {
        return format(date, 'MMM yyyy');
    }
}
