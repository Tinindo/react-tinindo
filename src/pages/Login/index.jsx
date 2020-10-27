import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import api from '../../services/api';
import UsersService from '../../services/users.service';

import logo from '../../assets/images/logo.png';
import './style.css';
// import ErrorMessage from '../../components/ErrorMessage';

export default function Login() {
    const usersService = new UsersService(api);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        console.log({ email, password })

        usersService.login({ email, password })
            .then(() => history.push('/services'))
            .catch(error => {
                console.log(error);
                setAuthError(error.data)
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
                <div className="margin-content">
                    <h1 className="title-login">Fazer login</h1>
                </div>
                <div className="content-left column">
                    <form onSubmit={handleLogin}>
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
                            <label className="font-color lbm-check" for="lbm">Lembrar-me</label>
                        </div>
                        <input className="btn-style" type="submit" value="Entrar" />
                    </form>
                    <div className="content-left margin-top">
                        <Link className='link-style link-style-menu' to='/register'>
                            Não possui uma conta? Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}