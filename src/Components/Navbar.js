import React, { useState } from 'react';
import './Navbar.css';
import Logo from './images/logo.svg';
import IconHamburger from './images/icon-hamburger.svg';
import NavList from './NavList'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    let menu
    const clickHandler = ()=> {
        setShowMenu(!showMenu)
    }

    if(showMenu) {
        menu = <div className="menu">Menu</div>
    }
    return (
        <div className="navbar">
            <div className="navbar__left"><img src={Logo} alt=""/></div>
            <div className="navbar__links">
                <NavList />
            </div>
            <div className="navbar__right"><img onClick={clickHandler}src={IconHamburger} alt=""/></div>
            {menu}
        </div>
    )
}

export default Navbar
