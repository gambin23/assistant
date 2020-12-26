import { FunctionComponent } from "react";
import { FormattedNumber } from "react-intl";

interface ICurrencyProps {
    value: number;
    currency: string;
}

const Currency: FunctionComponent<ICurrencyProps> = ({ value, currency }) => {
    return (
        <FormattedNumber value={value} currency={currency} style="currency" />
    )
}
export default Currency;
