import React from 'react';

import './styles.css';

export default function InputYesNo({ id }) {
    var idYes = 'yes' + id;
    var idNo = 'no' + id;
    var name = 'yesorno' + id;

    return (
        <div className="radio-container">
            <input className="input-radio" type="radio" id={idYes} name={name} value={true} />
            <label className="radio-label radio-label-yes font-color-radio" htmlFor={idYes}>Sim</label>
            <input className="input-radio" type="radio" id={idNo} name={name} value={false} />
            <label className="radio-label radio-label-no font-color-radio" htmlFor={idNo}>Não</label>
        </div>
    );
}