import React, { useState } from 'react';
import closeIcon from './images/icon-close.svg';
import hamburgerIcon from './images/icon-hamburger.svg';
import './Navbar.css';
import Logo from './images/logo.svg';
import NavPattern from './images/bg-pattern-mobile-nav.svg';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = ()=> setSidebar(!sidebar);
    
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <button className={sidebar ? "hamburger active" : "hamburger"}>
                <img className="hamburger-icon"src={hamburgerIcon} alt="hamburgericon" onClick={showSidebar}/>
                <img className="close-icon" src={closeIcon} alt="closeicon" onClick={showSidebar}/>
            </button>                
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-list">
                        <li>
                        </li>
                        <li>
                            <a href="">How we work</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Account</a>
                        </li>
                        <li>
                           <a className="nav-button nav-menu-button" href="">View Plans</a>
                        </li>
                        <img className="nav-pattern" src={NavPattern} alt="navpattern"/>
                    </ul>
                    
            </nav>
        </div>
    )
}

export default Navbar
