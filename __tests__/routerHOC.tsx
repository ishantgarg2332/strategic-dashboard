import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const routerHOC: React.FunctionComponent = ({ children }) => {
    const history = createBrowserHistory();

    return (
        <Router
            location={history.location}
            navigator={history}
        >
            {children}
        </Router>
    )
}

export default routerHOC;