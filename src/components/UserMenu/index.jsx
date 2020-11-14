import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../contexts/AuthContext';
import history from '../../history';

import GreenButton from '../GreenButton';

import logoutIcon from '../../assets/images/logout-icon.png';

import './styles.css';

const DEFAULT_USER_AVATAR = 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png';

export default function UserMenu() {
    const { handleLogout } = useContext(Context);

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        setUserData(user);
    }, []);


    return (
        <nav id='user-menu'>
            <header>
                <Link onClick={handleLogout}>
                    <img id='logout-icon' src={logoutIcon} alt='Logout' />
                </Link>
                <img id='avatar' src={userData.avatar || DEFAULT_USER_AVATAR} alt='Avatar' />
                <h3>Bem vindo, {userData.first_name}</h3>
            </header>

            <br /> <br />

            <h3>Escolha o serviço certo para o seu imóvel</h3>

            <article>
                <GreenButton label='Minha conta' onClick={() => history.push('/minha-conta')} />
                <GreenButton label='Minha agenda' onClick={() => history.push('/agenda')} />
                <GreenButton label='Meu histórico' onClick={() => history.push('/historico')} />
            </article>
        </nav>
    );
}