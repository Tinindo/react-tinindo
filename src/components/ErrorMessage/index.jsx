import React from 'react';

import './styles.css'

export default function ErrorMessage({ message }) {
    return (
        <div className='error-block'>
            <h4>Opa, parece que algo deu errado...</h4>
            <br />
            <p>{message}</p>
        </div>
    )
}