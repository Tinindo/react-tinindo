import React, { useState } from 'react';

import api from '../../services/api';
import history from '../../history';

import parseDate from '../../helpers/parseDate';

import SideBar from '../../components/SideBar';
import Input from '../../components/Input';
import GreenButton from '../../components/GreenButton';
import ErrorMessage from '../../components/ErrorMessage';

import './styles.css';

export default function CreateUser() {
    const [errorMessage, setErrorMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [document, setDocument] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [birthDate, setBirthDate] = useState('');

    function handleCreateUser(event) {
        event.preventDefault();

        const parsedBirthDate = parseDate(birthDate);

        api.post('/users', {
            first_name: firstName,
            last_name: lastName,
            password,
            whatsapp,
            email,
            document,
            is_provider: false,
            birth_date: parsedBirthDate
        })
            .then((response) => {
                console.log(response);
                history.push('/services')
            })
            .catch((error) => console.log(error));
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
                        <Input
                            label='Nome: '
                            name='firstName'
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <Input
                            label='Sobrenome: '
                            name='lastName'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Input
                            label='E-mail: '
                            name='email'
                            type='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Input
                            label='Senha: '
                            name='password'
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Input
                            label='Número de Whatsapp: '
                            name='whatsapp'
                            type='number'
                            onChange={(event) => setWhatsapp(event.target.value)}
                        />
                        <Input
                            label='Data de nascimento: '
                            name='birthDate'
                            type='date'
                            onChange={(event) => setBirthDate(event.target.value)}
                        />
                        <Input
                            label='CPF: '
                            name='document'
                            value={document}
                            onChange={(event) => setDocument(event.target.value)}
                        />
                    </fieldset>
                    <GreenButton label='Cadastrar' />
                </form>
            </main>
        </div>
    );
}