import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
    const { authenticated, loading, authToken, handleLogout, handleAuthentication } = useAuth();

    return (
        <Context.Provider value={{ authenticated, authToken, handleLogout, loading, handleAuthentication }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };