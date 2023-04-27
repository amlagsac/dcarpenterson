import React from 'react';
import logoHeader from './resources/logoHeader.png'
import headerCSS from './styles/Header.css';

function Header() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoHeader} alt="Logo" className="d-inline-block align-text-top"></img>
                    <h1>DCarpenterSon</h1>
                </a>
            </div>
        </nav>
    );
}

export default Header;