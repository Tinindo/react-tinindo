import { useState, useEffect } from 'react';

import history from '../../history';

import api from '../../services/api';

export default function useAuth() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');

        console.log(token);


        if (token) {
            (async () => {
                // const { email, password } = user;

                // const response = await api.post('/sessions', { email, password });

                // const { token } = response.data;

                api.defaults.headers.Authorization = token;

                setAuthToken(token);
                setAuthenticated(true);

                history.push('/parceiros');
            })();
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