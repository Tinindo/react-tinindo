import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import UsersService from '../../services/users.service';

import logo from '../../assets/images/logo.png';
import woman1 from '../../assets/images/woman1.png';
import woman2 from '../../assets/images/woman2.png';

import './style.css';


export default function Login() {
    const usersService = new UsersService(api);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState(false);

    function handleLogin(event) {
        event.preventDefault(); //não deixa a pagina recarregar/*

        console.log({ email, password })

        usersService.login({ email, password })
            .then(() => history.push('/services'))
            .catch(error => {
                error = error.toJSON();
                console.log(error);
                setAuthError(error);
            });
    }

    return (
        <div className="container">
            <img src={logo} width="364" height="149" />
            <img src={woman1} width="600" height="600"/>
            <img src={woman2} width="550" height="600"/>
            
           <div className="front-text">A forma mais confiável de contratar seu serviço de limpeza! </div>
           <div className="btn-diarista">Seja uma Diarista</div>
           <div className="btn-nao-possui-conta">Não possui conta?</div>
           <div className="btn-ja-cliente">Já sou Cliente</div>
        </div>
    );
}