import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ImageFamily from './images/image-intro-mobile.jpg';
import ImageFamilyDesktop from './images/image-intro-desktop.jpg';
import HeaderText from './HeaderText';
import HeaderPatternRight from './images/bg-pattern-intro-right-desktop.svg';
import HeaderPatternLeft from './images/bg-pattern-intro-left-desktop.svg';


function Header() {
    return (
        <div className="header">
            <Navbar />
                <div className="landingpage">
                <div className="header-pattern-right"><img src={HeaderPatternRight} alt=""/></div>
                    <div className="image-family"><img src={ImageFamily} alt=""/></div>
                    <HeaderText />
                    <div className="image-family-desktop"><img className="dimage"src={ImageFamilyDesktop} alt=""/></div>
                    <div className="header-pattern-left"><img src={HeaderPatternLeft} alt=""/></div>

                </div>
        </div>
        )
}

export default Header;
