import React from 'react';

import './styles.css';

export default function GreenButton({ label, ...rest }) {
    return (
        <button className="btn-style" type='submit' {...rest}>{label}</button>
    );
}