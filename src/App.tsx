import { Provider } from "react-redux";

import TransactionsPage from './ui/Transactions';
import store from "./store/Store";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Assistant</h1>
                        <TransactionsPage />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
