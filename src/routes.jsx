import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Landing from './pages/Landing';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import ServicesList from './pages/ServicesList';
import CreatePartner from './pages/CreatePartner';
import Landing from './pages/Landing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/cadastrar-usuario' exact component={CreateUser} />
            <Route path='/virar-parceiro' exact component={CreatePartner} />
            <Route path='/services' exact component={ServicesList} />
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={Landing} />
        </BrowserRouter>
    );
}
