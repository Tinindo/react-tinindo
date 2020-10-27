import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import smallLogo from '../../assets/min-logo.png'
import arrowIcon from '../../assets/arrow.png';
import smileIcon from '../../assets/smile-icon.png';

import './styles.css';

export default function CreateUser() {
    const history = useHistory();

    function handleCreateUser(event) {
        event.preventDefault();
    }

    return (
        <div id='page-create-user'>
            <div className="menu">
                <div className="content-center margin-logo-menu">
                    <img src={smallLogo} width="48" height="56" />
                </div>
                <div className="content-center">
                    <Link className="link-style-menu" to='/'>
                        <img className="img-position" src={arrowIcon} width="24" height="24" />
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 margin-register-top"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 panel-register">
                        <div className="title-register content-center">
                            <h1 className="line">Cadastrar Usuário</h1>
                        </div>
                        <div className="content-center circle">
                            <img className="img" src={smileIcon} width="150" height="153" />
                        </div>
                        <div className="content-center div-form">
                            <form onSubmit={handleCreateUser}>
                                <label className="font-color" for="first_name">Nome:</label>
                                <input className="font-color input-style register" type="text" id="first_name" name="first_name" />
                                <label className="font-color" for="last_name">Sobrenome:</label>
                                <input className="font-color input-style register" type="text" id="last_name" name="last_name" />
                                <label className="font-color" for="email">E-mail:</label>
                                <input className="font-color input-style register" type="email" id="email" name="email" />
                                <label className="font-color" for="whatsapp">Número de telefone:</label>
                                <input className="font-color input-style register" type="text" id="whatsapp" name="whatsapp" />
                                <label className="font-color" for="document">CPF:</label>
                                <input className="font-color input-style register" type="number" id="document" name="document" />
                                <label className="font-color" for="birth_date">Data de nascimento:</label>
                                <input className="font-color input-style register" type="date" id="birth_date" name="birth_date" />
                                <input className="btn-style btn-margin register" type="submit" value="Cadastrar" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    );
}