import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from '../Home';
import Products from '../Header/Links/Products';
import Services from '../Header/Links/Services';
import About from '../Header/Links/About';
import ContactUs from '../Header/Links/ContactUs';
import NoPage from '../NoPage';

function NavbarList() {
    return (
        <>
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default NavbarList;