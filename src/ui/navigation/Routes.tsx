import { Route, Switch } from "react-router-dom";

import TransactionsPage from "../TransactionsPage";
import AddTransactionPage from "../AddTransactionPage";
import TransactionPage from "../TransactionPage";

function Routes() {
    return (
        <Switch>
            <Route path="/new" component={AddTransactionPage} />
            <Route path="/transaction/:id" component={TransactionPage} />
            <Route path="/" component={TransactionsPage} />
        </Switch>
    )
}

export default Routes;
