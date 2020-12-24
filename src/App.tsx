import { Provider } from "react-redux";

import TransactionsPage from './ui/Transactions';
import store from "./store/Store";
import { IntlProvider } from "react-intl";

function App() {
    return (
        <Provider store={store}>
            <IntlProvider locale="en">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Assistant</h1>
                            <TransactionsPage />
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </Provider>
    );
}

export default App;
