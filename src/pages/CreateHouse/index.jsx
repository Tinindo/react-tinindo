import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../../contexts/AuthContext';

import UserMenu from '../../components/UserMenu';
import GreenButton from '../../components/GreenButton';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import './styles.css';

export default function CreateHouse() {

    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [postalCode , setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [garage, setGarage] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [living, setLiving] = useState('');

    function handleCreateHouse(event) {
        (async () => {
            event.preventDefault();

            const user = JSON.parse(localStorage.getItem('user'));

            const response = /*await api.post(`/users/${user.user_id}/properties`,*/ {
                postal_code: postalCode,
                street,
                number,
                complement,
                neighborhood,
                city,
                state,
                country: 'Brasil',
                rooms_quantity: bedroom,
                garages_quantity: garage,
                kitchens_quantity: kitchen,
                bathrooms_quantity: bathroom,
                living_rooms_quantity: living
            };

            console.log(response);

        })();
    }

    return (
        <div id='page-create-house'>
            <UserMenu />

            <main>
                <h1>Cadastrar Imóvel</h1>

                <form onSubmit={handleCreateHouse}>
                    <fieldset>
                        <Input
                            required
                            label='Endereço: '
                            name='street'
                            value={street}
                            onChange={(event) => setStreet(event.target.value)}
                        />
                        <Input
                            required
                            label='Número: '
                            name='number'
                            type='number'
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                        />
                        <Input
                            label='Complemento: '
                            name='complement'
                            value={complement}
                            onChange={(event) => setComplement(event.target.value)}
                        />
                        <Input
                            required
                            label='Bairro: '
                            name='neighborhood'
                            onChange={(event) => setNeighborhood(event.target.value)}
                        />
                        <Input
                            required
                            label='Cidade: '
                            name='city'
                            onChange={(event) => setCity(event.target.value)}
                        />
                        <Input
                            required
                            label='CEP: '
                            name='postal_code'
                            value={postalCode}
                            onChange={(event) => setPostalCode(event.target.value)}
                        />
                        <Input
                            required
                            label='Estado: '
                            name='state'
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />
                        <Input
                            required
                            label='Quantidade de Dormitórios: '
                            name='rooms_quantity'
                            type='number'
                            onChange={(event) => setBedroom(event.target.value)}
                        />
                        <Input
                            required
                            label='Quantidade de Banheiros: '
                            name='bathrooms_quantity'
                            type='number'
                            onChange={(event) => setBathroom(event.target.value)}
                        />
                        <Input
                            required
                            label='Quantidade de Salas: '
                            name='living_quantity'
                            type='number'
                            onChange={(event) => setLiving(event.target.value)}
                        />
                        <Input
                            required
                            label='Quantidade de Garagens: '
                            name='garages_quantity'
                            type='number'
                            onChange={(event) => setGarage(event.target.value)}
                        />
                        <Input
                            required
                            label='Quantidade de Cozinhas: '
                            name='kitchens_quantity'
                            type='number'
                            onChange={(event) => setKitchen(event.target.value)}
                        />
                        

                        <GreenButton label='Cadastrar' />

                    </fieldset>
                </form>
            </main>
        </div>
    );
}