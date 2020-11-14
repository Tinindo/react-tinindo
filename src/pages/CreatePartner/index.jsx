import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';

import history from '../../history';
import { Context } from '../../contexts/AuthContext';

import parseDate from '../../helpers/parseDate';

import SideBar from '../../components/SideBar';
import GreenButton from '../../components/GreenButton';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import InputYesNo from '../../components/InputYesNo';

import './styles.css';

export default function CreatePartner() {
    let { handleAuthentication } = useContext(Context);

    const [specialties, setSpecialties] = useState([]);

    const [bio, setBio] = useState('');
    const [firstName, setFirstName] = useState('');
    const [acceptsMensalProposals, setAcceptsMensalProposals] = useState(false);
    const [isCorporate, setIsCorporate] = useState(false);
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [document, setDocument] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [valuePerDay, setValuePerDay] = useState('');

    useEffect(() => {
        api.get('/specialties')
            .then(response => {
                console.log(response);
                setSpecialties(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    function handleCreatePartner(event) {
        (async () => {
            event.preventDefault();

            const parsedBirthDate = parseDate(birthDate);

            const response = await api.post('/partners', {
                first_name: firstName,
                last_name: lastName,
                password,
                whatsapp,
                email,
                document,
                bio,
                is_corporate: isCorporate,
                is_provider: true,
                birth_date: parsedBirthDate,
                accepts_mensal_proposals: acceptsMensalProposals,
                value_per_day: valuePerDay,
                specialties,
            });

            console.log(response);

            const loginResponse = await api.post('/sessions', {
                email,
                password
            });

            console.log(loginResponse);

            const token = `Bearer ${loginResponse.data.token}`;

            handleAuthentication(token);

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(loginResponse.data.user));

            api.defaults.headers.Authorization = token;

            history.push('/parceiros');
        })();
    }

    return (
        <div id='page-create-partner'>
            <SideBar />

            <main>
                <h1>Cadastrar Parceiro</h1>

                <div id='avatar-container'>
                    <div id="user-avatar"></div>
                </div>

                <form onSubmit={handleCreatePartner}>
                    <fieldset>
                        <Input
                            required
                            label='Nome: '
                            name='firstName'
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <Input
                            required
                            label='Sobrenome: '
                            name='lastName'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Input
                            required
                            label='E-mail: '
                            name='email'
                            type='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Input
                            required
                            label='Senha: '
                            name='password'
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Input
                            required
                            label='Número de Whatsapp: '
                            name='whatsapp'
                            type='number'
                            onChange={(event) => setWhatsapp(event.target.value)}
                        />
                        <Input
                            required
                            label='Data de nascimento: '
                            name='birthDate'
                            type='date'
                            onChange={(event) => setBirthDate(event.target.value)}
                        />
                        <Input
                            required
                            label='CPF: '
                            name='document'
                            value={document}
                            onChange={(event) => setDocument(event.target.value)}
                        />

                        <p className="font-color">Especialidade:</p>
                        <div className="div-container">
                            {specialties.map(specialty =>
                                <CheckBox
                                    name={specialty.specialty_id}
                                    label={specialty.specialty_name}
                                    key={specialty.specialty_id}
                                    onChange={(event) => setSpecialties([...specialties, event.target.value])}
                                    value={specialty.specialty_id} />
                            )}
                        </div>

                        <p className="font-color">Pessoa jurídica?</p>
                        <InputYesNo id="1"
                            value={isCorporate}
                            onChange={(event) => setIsCorporate(event.target.value)} />

                        <Input
                            required
                            label="Valor médio da diária: "
                            name="dailyRate"
                            type="number"
                            value={valuePerDay}
                            onChange={(event) => setValuePerDay(event.target.value)}
                        />

                        <p className="font-color">Aceita propostas mensais?</p>

                        <InputYesNo id="2"
                            value={acceptsMensalProposals}
                            onChange={(event) => setAcceptsMensalProposals(event.taget.value)} />

                        <label className="font-color" htmlFor="bio">Biografia:</label>

                        <textarea className="textarea-style"
                            name="bio"
                            id="bio"
                            cols="70"
                            rows="4"
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                        ></textarea>

                        <GreenButton label='Cadastrar' />

                    </fieldset>
                </form>
            </main>
        </div>
    );
}