import React from 'react';
import insta from '../src/image/insta.jpg';
import logo from '../src/image/logo.png';
import whats from '../src/image/whatsapp.png';


import './navBar.css';
import { Outlet, Link } from "react-router-dom";

const navItem={
  fontFamily: 'Courier New, monospace',
  fontSize: "1.2em",
  letterSpacing:'1.2px',
  fontWeight:'bold',
}

const NavBar = () => {
  const openWhatsApp = () => {
    var phoneNumber = '8861505799';
    var defaultMessage = encodeURIComponent('Hello Swathi Vaibhav,\nCan you please help me with more information about');
    var url = `https://wa.me/${phoneNumber}?text=${defaultMessage}&create=true`;
    window.open(url);
  }
  

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:'black',paddingTop:'20px',paddingBottom:'20px'}}>
        <button class="navbar-toggler" type="button"  data-bs-toggle="collapse"  data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="navmenu">
          <ul class="navbar-nav ms-auto" style={navItem}>
            <li class="nav-item">
              <Link class="nav-link" to="/home">HOME</Link>
            </li> 
            {/* <li class="nav-item ">
              <Link class="nav-link" to="/hotel">HOTELS</Link>
            </li> */}
            <li class="nav-item ">
              <a class="nav-link" href="/about-us">ABOUTUS</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/services">Services</a>
            </li>
          </ul>
        </div>
        <li>
          <a href="https://www.instagram.com/"><img src={insta} alt="inta" height="50px" style={{borderRadius:'10px'}}></img></a>
        </li>
        <li>
          <a href="#" onClick={openWhatsApp}>
            <img src={whats} alt="inta" height="50px" style={{ borderRadius:'8px', marginRight:'10px' }}></img>
          </a>
        </li>
      </nav>
    </div>
  )
}

export default NavBar;
