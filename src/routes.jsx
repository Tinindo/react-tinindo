import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Landing from './pages/Landing';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import ServicesList from './pages/ServicesList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/register' exact component={CreateUser} />
            <Route path='/services' exact component={ServicesList} />
            <Route path='/' exact component={Login} />
        </BrowserRouter>
    );
}
