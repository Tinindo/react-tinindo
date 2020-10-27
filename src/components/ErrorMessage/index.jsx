import React from 'react';

export default function ErrorMessage({ message }) {
    return (
        <div className='error-block'>
            <p>{message}</p>
        </div>
    )
}