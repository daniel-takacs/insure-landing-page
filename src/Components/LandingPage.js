import React from 'react';
import ImageFamily from './images/image-intro-mobile.jpg';
import './LandingPage.css';
import LandingText from './LandingText';

function LandingPage() {
    return (
        <div className="landingpage">
            <div className="image-family"><img src={ImageFamily} alt=""/></div>
             <LandingText />
        </div>
    )
}

export default LandingPage
