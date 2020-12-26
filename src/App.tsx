import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import store from "./store/Store";
import Navigation from "./ui/navigation/Navigation";

function App() {
    return (
        <Provider store={store}>
            <IntlProvider locale="en-GB">
                <Navigation />
            </IntlProvider>
        </Provider >
    );
}

export default App;
