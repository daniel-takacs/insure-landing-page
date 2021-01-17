import React from 'react';
import './Navbar.css';
import Logo from './images/logo.svg';
import IconHamburger from './images/icon-hamburger.svg'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left"><img src={Logo} alt=""/></div>
            <div className="navbar__links">
                <nav>
                    <ul>
                        <li><a href="">How we work</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href=""><button>View Plans</button></a></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar__right"><img src={IconHamburger} alt=""/></div>
        </div>
    )
}

export default Navbar
