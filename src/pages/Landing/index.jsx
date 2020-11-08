import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import UsersService from '../../services/users.service';

import logo from '../../assets/images/logo.png';
import womans from '../../assets/images/womans.png'

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
            <img className="img-index-position" src={womans} width="59%" height="83%"/>
            <div className="div-button">
                <Link className="button-style padding-button-3 color-button-2 font-index" to='/virar-parceiro'>Seja uma Diarista</Link>
            </div>
            <div className="logo-config">
                <img src={logo} width="100%" height="100%"/>
            </div>
            <div className="logo-index">
                <p className="font-index p-size">A forma mais confiável de contratar seu serviço de limpeza!</p>
            </div>
            <div className="div-buttons">
                <Link className="button-style color-button-1 font-index" to='/cadastrar-usuario'>Não possuo uma conta</Link>
                <Link className="button-style padding-button-2 color-button-2 font-index" to='/Login'>Já sou cliente</Link>
            </div>
        </div>
    );
}