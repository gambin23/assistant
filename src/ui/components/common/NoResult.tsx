import { FunctionComponent } from "react";

interface INoResultProps {
    value?: string;
}

const NoResult: FunctionComponent<INoResultProps> = ({ value }) => {
    return (
        <div className="text-center p-5">
            <img src="images/no-results.svg" height="300" alt="no-results" />
            <h3>No Results</h3>
            {value ? <p>No results found for <i>{value}</i></p> : <p>There are no results</p>}
        </div>
    )
}
export default NoResult;

