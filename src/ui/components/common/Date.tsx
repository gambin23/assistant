import { FunctionComponent } from "react";
import { FormattedDate } from "react-intl";

export interface IDateProps {
    value: Date;
    day?: string;
    weekday?: string;
    month?: string;
    year?: string;
}

const Date: FunctionComponent<IDateProps> = ({ value, day, weekday, month, year }) => {
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

