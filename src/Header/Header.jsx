import React from 'react';
import logoHeader from '../resources/logoHeader.png'
// import headerCSS from '../styles/Header.css'
import NavbarToggle from './NavbarList';
import NavbarList from './NavbarList';

function Header() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="d-inline-block align-text-top" src={logoHeader} alt="DCarpenterSonLogo"></img>
                    <h1>DCarpenterSon</h1>
                </a>
                <NavbarToggle />
                <NavbarList />
            </div>
        </nav>
    );
}

export default Header;