import React from 'react';

import './styles.css';

export default function CheckBox({ name, label, value, ...rest }) {
    return (
        <div className='checkbox-container'>
            <input className='checkbox-value' type='checkbox' id={name} value={value} />
            <label className="checkbox-label font-color" htmlFor={name}>{label}</label>
        </div>
    );
}