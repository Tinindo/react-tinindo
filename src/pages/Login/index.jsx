import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import { Context } from '../../contexts/AuthContext';

import history from '../../history';

import api from '../../services/api';

import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';

import logo from '../../assets/images/logo.png';

import './style.css';

export default function Login() {
    let { handleAuthentication } = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        console.log({ email, password });

        api.post('sessions', { email, password })
            .then((response) => {
                console.log(response);

                const token = `Bearer ${response.data.token}`;

                handleAuthentication(token);

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(response.data.user));

                api.defaults.headers.Authorization = token;

                history.push('/parceiros');
            })
            .catch(error => {
                console.log(error);
                setAuthError(error);
            });
    }

    return (
        <div className="container">
            <div className="box-left content-left row">
                <div className="content-left column">
                    <img src={logo} width="364" height="149" />
                </div>
            </div>
            <div className="box-right content-right column">
                <h1 className="title-login">Efetuar login</h1>
                {authError &&
                    <ErrorMessage message='Combinação de usuário e senha inválidas' />}
                <div className="content-left column">
                    <form id='login-form' onSubmit={handleLogin}>
                        <Input
                            label='E-mail'
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)} />

                        <Input
                            label='Senha'
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)} />

                        <div className="align-content-input">
                            <input className="ckb-style" type="checkbox" id="lbm" name="lbm" />
                            <label className="font-color lbm-check" htmlFor="lbm">Lembrar-me</label>
                        </div>
                        <input className="btn-style" type="submit" value="Entrar" />
                    </form>
                    <div className="content-left margin-top">
                        <Link className='link-style link-style-menu' to='/cadastrar-usuario'>
                            Ainda não possui uma conta? Cadastre-se clicando aqui.
                        </Link>
                    </div>
                    <br />
                    <div className="content-left margin-top" id='partner-invite'>
                        <Link className='link-style link-style-menu' to='/virar-parceiro'>
                            É uma diarista? Torne-se nosso parceiro!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}