import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import './header.scss';

const Header = () => (
    <header className="main-header">
        <div className="heading-container">
            <Link to="/"><i className="fa fa-home"></i></Link>
            <h1 className="main-heading">
                <Link to="/">
                    PITCH KARAOK<span>ES</span>
                </Link>
            </h1>
        </div>
        <a href="http://tampere.es" target="_blank" rel="noopener noreferrer">
            <img className="header-logo" src={logo} alt="logo" />
        </a>
    </header>
);

export default Header;
