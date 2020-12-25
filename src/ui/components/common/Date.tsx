import React from "react";
import { FormattedDate } from "react-intl";

export interface IDateProps {
    value: Date;
    day?: string;
    weekday?: string;
    month?: string;
    year?: string;
}

const Date = ({ value, day, weekday, month, year }: IDateProps) => {
    return (
        <FormattedDate
            value={value}
            day={day}
            weekday={weekday}
            month={month}
            year={year}
        />
    )
}
export default Date;

