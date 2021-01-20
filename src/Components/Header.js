import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ImageFamily from './images/image-intro-mobile.jpg';
import ImageFamilyDesktop from './images/image-intro-desktop.jpg';
import './LandingPage.css';
import HeaderText from './HeaderText';

function Header() {
    return (
        <div className="header">
            <Navbar />
                <div className="landingpage">
                    <div className="image-family"><img src={ImageFamily} alt=""/></div>
                    <HeaderText />
                    <div className="image-family-desktop"><img className="dimage"src={ImageFamilyDesktop} alt=""/></div>
                </div>
        </div>
        )
}

export default Header;
