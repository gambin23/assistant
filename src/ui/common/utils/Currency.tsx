import { FormattedNumber } from "react-intl";

interface ICurrencyProps {
    value: number;
    currency: string;
}

const Currency = (props: ICurrencyProps) => {
    return (
        <FormattedNumber value={props.value} currency={props.currency} style="currency" />
    )
}
export default Currency;
