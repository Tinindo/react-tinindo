import React from 'react';

import { Router } from 'react-router-dom';

import history from './history';

import Routes from './routes.jsx';

import { AuthProvider } from './contexts/AuthContext';

import './assets/styles/global.css';

function App() {
    return (
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    );
}

export default App;
