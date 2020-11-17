import React from 'react';
import { Link } from 'react-router-dom';

// import whastappIcon from '../../assets/images/whatsapp.svg';
import profileIcon from '../../assets/images/profile-icon.png';
import scheduleIcon from '../../assets/images/schedule-icon.png';

import './styles.css';

export default function PartnerItem({ partner }) {
    function handleClickPartner() {
        localStorage.setItem('partner', JSON.stringify(partner));
    }

    const DEFAULT_IMAGE_URL = 'https://www.flaticon.com/svg/static/icons/svg/1619/1619817.svg';

    return (
        <article className='partner-item'>
            <header>
                <img src={partner.avatar || DEFAULT_IMAGE_URL} alt={`${partner.first_name} avatar`} />
                {/*Botao para detalhes do perfil*/}
                <div>
                    <strong>{partner.first_name} {partner.last_name}</strong>
                    <span>{partner.specialties.map(spec => spec.specialty_name).join(', ')}</span>
                </div>
            </header>

            <p>{partner.bio}</p>

            <footer>
                <div>
                    <Link onClick={handleClickPartner} to='/agendar'>
                        <img src={scheduleIcon} alt='Agendar serviço' />
                        <p>Agendar serviço</p>
                    </Link>
                </div>

                <div>
                    <img src={profileIcon} alt='Ver detalhes de perfil' />
                    <p>Perfil</p>
                </div>

                <div>
                    <p>Valor médio da diária: <strong>R$ {partner.value_per_day}</strong></p>
                </div>
            </footer>
        </article>
    );
}