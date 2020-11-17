import React from 'react';

import houseIcon from '../../assets/images/house-icon.png';

import './styles.css';

export default function UserHouse({ userProperty, ...rest }) {
    const {
        state,
        city,
        neighborhood,
        street,
        number,
        complement,
    } = userProperty;

    return (
        <li id='user-house' {...rest}>
            <img src={houseIcon} alt='house-icon' />
            <div id='address'>
                <p>{city}-{state}</p>
                <p>{street}, {neighborhood}</p>
                <p>{number}{complement ? `, ${complement}` : undefined}</p>
            </div>
        </li>
    );
}