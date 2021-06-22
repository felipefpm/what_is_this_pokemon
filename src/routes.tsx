import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
        </BrowserRouter>
    );
}

export default Routes;