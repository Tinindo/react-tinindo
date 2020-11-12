import { useState, useEffect } from 'react';

import history from '../../history';

import api from '../../services/api';

export default function useAuth() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        console.log({ token, loading });

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setAuthToken(token);
            setAuthenticated(true);

            history.push('/parceiros');
        }

        setLoading(false);
    }, []);

    function handleLogout() {
        setAuthToken(undefined);
        setAuthenticated(false);

        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;

        history.push('/');
    }

    function handleAuthentication(token) {
        setAuthenticated(true);
        setAuthToken(token);
    }

    return {
        authenticated,
        authToken,
        loading,
        handleAuthentication,
        handleLogout
    };
}