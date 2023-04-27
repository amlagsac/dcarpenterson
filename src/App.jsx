import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import logoHeader from './resources/logoHeader.png'
import Home from './Home';
import Products from './Header/Links/Products';
import Services from './Header/Links/Services';
import About from './Header/Links/About';
import ContactUs from './Header/Links/ContactUs';
import NoPage from './NoPage';
import AppCSS from './styles/App.css';

function App() {
  return (
    <>
        <nav className="navbar-border navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="d-inline-block align-text-top" src={logoHeader} alt="DCarpenterSonLogo"></img>
                    <h1>D Carpenter's Son Enterprise OPC</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
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
                </div>
            </div>
        </nav>
        <hr/>
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

export default App;
