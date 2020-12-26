import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames";
import { Grid1x2Fill } from "react-bootstrap-icons";

import Routes from "./Routes";

function Navigation() {
    const [hideMenu, setHideMenu] = useState(false);

    function toggleMenu() {
        setHideMenu(!hideMenu);
    }
    return (
        <Router>
            <div className={classNames("d-flex", { toggled: hideMenu })} id="wrapper">
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">Assistant</div>
                    <div className="list-group list-group-flush">
                        <Link to="/" className="list-group-item list-group-item-action bg-light">Transactions</Link>
                        <Link to="/new" className="list-group-item list-group-item-action bg-light">Add Transaction</Link>
                        <Link to="/" className="list-group-item list-group-item-action bg-light">Settings</Link>
                        <Link to="/" className="list-group-item list-group-item-action bg-light">Logout</Link>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <Grid1x2Fill onClick={toggleMenu} id="menu-btn"></Grid1x2Fill>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Account</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="/" className="nav-link dropdown-toggle" role="button">
                                        Notifications
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link to="/" className="dropdown-item">Transaction</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container mt-3">
                        <Routes />
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Navigation;
