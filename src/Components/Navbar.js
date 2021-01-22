import React, { useState } from 'react';
import './Navbar.css';
import Logo from './images/logo.svg';
import IconHamburger from './images/icon-hamburger.svg';
import NavlistData from './NavlistData';
import { Link } from '@material-ui/core';
import  IconClose  from './images/icon-close.svg';

function Navbar() {
    const [siderbar, setSidebar] = useState(false);
    
    const showSidebar = ()=> {
        setSidebar(!sidebar)
    }

    return (
        <div className="navbar">
            <div className="navbar__left"><img src={Logo} alt=""/></div>
            <div className="navbar__links">
                <Link>
                <div className="navbar__right"><img onClick={showSidebar}src={IconHamburger} alt=""/></div>
                <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                        <img src={IconClose}/>
                        </Link>
                        </li>
                        {NavlistData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                    <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                </Link>
            </div>
          
        </div>
    )
}

export default Navbar
