import { FunctionComponent } from "react";
import { FormattedTime } from "react-intl";

import { IDateProps } from "./Date";

interface ITimeProps extends IDateProps {
    hour?: string;
    minute?: string;
    second?: string;
}

const Time: FunctionComponent<ITimeProps> = ({ value, day, weekday, month, year, hour, minute, second }) => {
    return (
        <FormattedTime
            value={value}
            day={day}
            weekday={weekday}
            month={month}
            year={year}
            hour={hour}
            minute={minute}
            second={second}
        />
    )
}
export default Time;

