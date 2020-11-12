import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import PartnerItem from '../../components/PartnerItem';
import SideBar from '../../components/SideBar';

import './styles.css';

export default function PartnersList() {
    const [partners, setPartners] = useState([]);

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
            <SideBar />
            <main>
                <h1>Parceiros disponíveis</h1>

                <br />

                <div id='partners-list'>
                    {partners.map((partner) => (

                        <PartnerItem key={partner.partner_id} partner={partner} />

                    ))}
                </div>

            </main>
        </div>
    );
}