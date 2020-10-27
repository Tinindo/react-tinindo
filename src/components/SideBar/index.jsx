import React from 'react';
import { Link } from 'react-router-dom';

import smallLogo from '../../assets/images/min-logo.png'
import arrowIcon from '../../assets/images/arrow.png';

import './styles.css';

export default function SideBar() {
    return (
        <div className="menu">
            <img id="logo-menu" src={smallLogo} width="48" height="56" />
            <Link className="back-icon" to='/'>
                <img src={arrowIcon} width="24" height="24" />
            </Link>
        </div>
    );
}