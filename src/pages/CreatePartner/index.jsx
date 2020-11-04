import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import SideBar from '../../components/SideBar';
import GreenButton from '../../components/GreenButton';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import './styles.css';

export default function CreatePartner() {
    const [specialties, setSpecialties] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [document, setDocument] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [birthDate, setBirthDate] = useState('');

    useEffect(() => {
        api.get('/specialties')
            .then(response => {
                console.log(response);
                setSpecialties(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    function handleCreatePartner() {

    }

    return (
        <div id='page-create-partner'>
            <SideBar />

            <main>
                <h1>Cadastrar parceiro</h1>

                <div id='avatar-container'>
                    <div id="user-avatar"></div>
                </div>

                <form onSubmit={handleCreatePartner}>
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

                        <p>Especialidade</p>
                        {specialties.map(specialty =>
                            <CheckBox
                                name={specialty.specialty_id}
                                label={specialty.specialty_name}
                                key={specialty.specialty_id}
                                onChange={(event) => setSpecialties([...specialties, event.target.value])}
                                value={specialty.specialty_id} />
                        )}

                        <Input />
                        <Input />
                        <Input />

                        <GreenButton label='Cadastrar' />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}