import React, { useState } from 'react';
import closeIcon from './images/icon-close.svg';
import hamburgerIcon from './images/icon-hamburger.svg';
import './Navbar.css';
import Logo from './images/logo.svg';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = ()=> setSidebar(!sidebar);
    
    return (
        <div className="navbar">
            <img src={Logo} alt=""/>
            <img className="hamburger-icon"src={hamburgerIcon} alt="hamburgericon" onClick={showSidebar}/>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-list">
                        <li>
                            <img className="close-icon" src={closeIcon} alt="closeicon" onClick={showSidebar}/>
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
                           <a className="nav-button" href="">View Plans</a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar
