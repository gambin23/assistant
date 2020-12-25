import { FormattedNumber } from "react-intl";

interface ICurrencyProps {
    value: number;
    currency: string;
}

const Currency = ({ value, currency }: ICurrencyProps) => {
    return (
        <FormattedNumber value={value} currency={currency} style="currency" />
    )
}
export default Currency;
