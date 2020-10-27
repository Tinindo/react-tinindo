import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SideBar from '../../components/SideBar';
import Input from '../../components/Input';
import GreenButton from '../../components/GreenButton';

import './styles.css';

export default function CreateUser() {
    const history = useHistory();

    function handleCreateUser(event) {
        event.preventDefault();
    }

    return (
        <div id="page-create-user">
            <SideBar />
            <main>
                <h1>Cadastrar Usuário</h1>
                <div id='avatar-container'>
                    <div id="user-avatar"></div>
                </div>
                <form onSubmit={handleCreateUser}>
                    <fieldset>
                        <Input label='Nome: ' name='first_name' />
                        <Input label='Sobrenome: ' name='last_name' />
                        <Input label='E-mail: ' name='email' />
                        <Input label='Senha: ' name='password' />
                        <Input label='Número de Whatsapp: ' name='whatsapp' />
                        <Input label='Data de nascimento: ' name='birth_date' type='date' />
                    </fieldset>
                    <GreenButton label='Cadastrar' />
                </form>
            </main>
        </div>
    );
}