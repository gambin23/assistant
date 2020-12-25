import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import store from "./store/Store";
import TransactionsPage from "./ui/TransactionsPage";
import AddTransactionPage from "./ui/AddTransactionPage";

function App() {
    return (
        <Provider store={store}>
            <IntlProvider locale="en">
                <Router>
                    <ul>
                        <li>
                            <Link to="/">Transactions</Link>
                        </li>
                        <li>
                            <Link to="/new">Add Transaction</Link>
                        </li>
                    </ul>
                    <div className="container">
                        <Switch>
                            <Route path="/new">
                                <AddTransactionPage />
                            </Route>
                            <Route path="/">
                                <TransactionsPage />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </IntlProvider>
        </Provider>
    );
}

export default App;
