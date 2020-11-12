import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Context } from './contexts/AuthContext';

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import PartnersList from './pages/PartnersList';
import CreatePartner from './pages/CreatePartner';
import Landing from './pages/Landing';

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context);

    if (loading) {
        return (<h1>Loading</h1>);
    }

    if (isPrivate && !authenticated) {
        return <Redirect to='/' />
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute path='/cadastrar-usuario' exact component={CreateUser} />
            <CustomRoute path='/virar-parceiro' exact component={CreatePartner} />
            <CustomRoute path='/parceiros' isPrivate exact component={PartnersList} />
            <CustomRoute path='/login' exact component={Login} />
            <CustomRoute path='/' exact component={Landing} />
        </Switch>
    );
}
