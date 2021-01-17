import React from 'react';
import ImageFamily from './images/image-intro-mobile.jpg';
import ImageFamilyDesktop from './images/image-intro-desktop.jpg';
import './LandingPage.css';
import LandingText from './LandingText';

function LandingPage() {
    return (
        <div className="landingpage">
            <div className="image-family"><img src={ImageFamily} alt=""/></div>
             <LandingText />
            <div className="image-family-desktop"><img className="dimage"src={ImageFamilyDesktop} alt=""/></div>
        </div>
    )
}

export default LandingPage
