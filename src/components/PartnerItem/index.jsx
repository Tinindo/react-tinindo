import React from 'react';

import whastappIcon from '../../assets/images/whatsapp.svg';

import './styles.css';

export default function PartnerItem({ partner }) {
    const DEFAULT_IMAGE_URL = 'https://www.flaticon.com/svg/static/icons/svg/1619/1619817.svg';

    return (
        <div className='partner-item'>
            <header>
                <img src={partner.avatar || DEFAULT_IMAGE_URL} alt={`${partner.first_name} avatar`} />

                <div>
                    <strong>{partner.first_name} {partner.last_name}</strong>
                    <span>{partner.specialties.map(spec => spec.specialty_name)}</span>
                </div>
            </header>

            <p>{partner.bio}</p>

            <footer>
                <p>Valor médio da diária: R$ {partner.value_per_day}</p>
                <a target='_blank' href={`https://wa.me/${partner.whatsapp}`}>
                    <img src={whastappIcon} alt='Whatsapp' />
                </a>
            </footer>
        </div>
    );
}