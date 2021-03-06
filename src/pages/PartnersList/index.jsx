import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import PartnerItem from '../../components/PartnerItem';
// import SideBar from '../../components/SideBar';
import UserMenu from '../../components/UserMenu';

import './styles.css';

export default function PartnersList() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const { user_id } = JSON.parse(localStorage.getItem('user'));

        api.get(`/users/${user_id}`)
            .then((response) => {
                console.log(response);
                localStorage.setItem('userDetails', JSON.stringify(response.data));
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        api.get('/partners')
            .then((response) => {
                console.log(response);
                setPartners(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div id='page-partners-list'>
            <UserMenu />

            <main>
                <h1>Parceiros disponíveis</h1>

                <div id='partners-list'>
                    {partners.map((partner) => (

                        <PartnerItem key={partner.partner_id} partner={partner} />

                    ))}
                </div>

            </main>
        </div>
    );
}