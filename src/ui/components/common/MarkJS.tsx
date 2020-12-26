import { FunctionComponent, useEffect, useRef } from "react";
import Mark, { MarkRegExpOptions } from "mark.js";

interface IMarkProps {
    value: string;
    options?: MarkRegExpOptions;
}

const MarkJS: FunctionComponent<IMarkProps> = ({ value, options, children }) => {
    const markInstance = useRef<Mark>();
    const transactionsDOM = useRef<HTMLDivElement>();

    useEffect(() => {
        markInstance.current = new Mark(transactionsDOM.current);
        markInstance.current.unmark();
        markInstance.current.mark(value, options);
    });

    return (
        <div ref={transactionsDOM}>
            {children}
        </div>
    );
}
export default MarkJS;
