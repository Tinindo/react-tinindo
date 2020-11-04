import React from 'react';

import './styles.css';

export default function CheckBox({ name, label, value, ...rest }) {
    return (
        <div className='checkbox-container'>
            <label id='checkbox-label' htmlFor={name}>{label}</label>
            <input className='checkbox-value' type='checkbox' id={name} value={value} />
        </div>
    );
}