import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import history from '../../history';

import api from '../../services/api';

import parseDate from '../../helpers/parseDate';

import GreenButton from '../../components/GreenButton';
import UserHome from '../../components/UserHouse';
import UserMenu from '../../components/UserMenu';
import Input from '../../components/Input';

import addIcon from '../../assets/images/add-icon.png';
import arrowIcon from '../../assets/images/arrow-back.png'

import './styles.css';

export default function ScheduleService() {
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const partner = JSON.parse(localStorage.getItem('partner'));

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');

    function handleSchedule(event) {
        event.preventDefault();

        const parsedFrom = parseDate(`${date}T${from}`);
        const parsedTo = parseDate(`${date}T${to}`);

        api.post('/schedules', {
            start_at: parsedFrom,
            finish_at: parsedTo,
            price: partner.value_per_day,
            user_id: user.user_id,
            partner_id: partner.partner_id,
            user_property_id: selectedAddress
        })
            .then((response) => {
                console.log(response);
                alert('Serviço agendado com sucesso!');
                history.push('/parceiros');
            })
            .catch((error) => console.error(error));
    }

    function handleCreateAddress(event) {
        event.preventDefault();

        console.log('abrir modal de criação de endereço');
    }

    return (
        <div id='page-schedule-service'>
            <UserMenu />
            <main>
                <form onSubmit={handleSchedule}>
                    <Link to='/parceiros'>
                        <img src={arrowIcon} alt='Voltar' />
                    </Link>
                    <h1>Agendar serviço</h1>

                    <ul id='addresses-list'>
                        {user.properties.map(property => <UserHome
                            userProperty={property}
                            key={property.property_id}
                            onClick={() => setSelectedAddress(property.property_id)}
                            className={(selectedAddress === property.property_id) ? 'selected' : ''}
                        />)}

                        <button id='create-address' onClick={handleCreateAddress}>
                            <img src={addIcon} alt='Adicionar endereço' />
                            <p>Adicionar endereço</p>
                        </button>
                    </ul>

                    <Input
                        required
                        type='date'
                        label='Data de agendamento'
                        value={date}
                        onChange={(event) => setDate(event.target.value)} />
                    <Input
                        required
                        label='Hora de início'
                        name='from'
                        type='time'
                        value={from}
                        onChange={(event) => setFrom(event.target.value)} />
                    <Input
                        required
                        label='Hora de término'
                        name='from'
                        type='time'
                        value={to}
                        onChange={(event) => setTo(event.target.value)} />

                    <br />
                    <p>Valor aproximado (pode ser negociado): <strong>R$ {partner.value_per_day.toFixed(2)}</strong></p>

                    <GreenButton label='Agendar' />
                </form>

            </main>
        </div>
    );
}