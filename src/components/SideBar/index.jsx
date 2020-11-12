import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../contexts/AuthContext';

import smallLogo from '../../assets/images/min-logo.png'
// import arrowIcon from '../../assets/images/arrow.png';
import logoutIcon from '../../assets/images/logout-icon.png';

import './styles.css';

export default function SideBar() {
    const { handleLogout } = useContext(Context);

    return (
        <div className="menu">
            <Link to='/parceiros'>
                <img id="logo-menu" src={smallLogo} width="48" height="56" />
            </Link>

            <Link className="back-icon" to='/' onClick={handleLogout}>
                <img src={logoutIcon} width="24" height="24" />
            </Link>
        </div>
    );
}