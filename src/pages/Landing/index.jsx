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

    function handleClickCreatePartner(){
        history.push("/virar-parceiro");
    }

    function handleClickCreateUser(){
        history.push("/cadastrar-usuario");
    }

    function handleClickLogin(){
        history.push("/Login");
    }

    return (
        <div className="container">
            <img src={logo} width="364" height="149" />
            <img src={woman1} width="600" height="600"/>
            <img src={woman2} width="550" height="600"/>
            
           <div className="front-text">A forma mais confiável de contratar seu serviço de limpeza! </div>
           <div className="btn-diarista" onClick={handleClickCreatePartner}>Seja uma Diarista</div>
           <div className="btn-nao-possui-conta" onClick={handleClickCreateUser}>Não possui conta?</div>
           <div className="btn-ja-cliente" onClick={handleClickLogin}>Já sou Cliente</div>
        </div>
    );
}