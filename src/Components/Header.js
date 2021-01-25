import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ImageFamily from './images/image-intro-mobile.jpg';
import ImageFamilyDesktop from './images/image-intro-desktop.jpg';
import HeaderPatternRight from './images/bg-pattern-intro-right-desktop.svg';
import HeaderPatternLeft from './images/bg-pattern-intro-left-desktop.svg';
import './Header.css';
import PatternIntroLeftMobile from './images/bg-pattern-intro-left-mobile.svg';
import PatternIntroRightMobile from './images/bg-pattern-intro-right-mobile.svg';


function Header() {
    return (
        <div className="header">
            <Navbar />
                <div className="landingpage">
                <div className="header-pattern-right"><img src={HeaderPatternRight} alt=""/></div>
                    <div className="image-family"><img src={ImageFamily} alt=""/></div>


                    <div className="landingtextcontainer">
            <div className="landingtext">
            <div className="pattern1"><img src={PatternIntroLeftMobile} alt=""/></div>
            <h1>Humanizing your insurance.</h1>  
            <p> Get your life insurance coverage easier and faster. 
                We blend our expertise and technology to help you find 
                the plan that’s right for you. Ensure you and your loved ones are protected. 
            </p> 
            <div className="landing-button"><button>VIEW PLANS</button></div> 
            <div className="pattern2"><img src={PatternIntroRightMobile} alt=""/></div>
            </div>
        </div>


                    <div className="image-family-desktop"><img className="dimage"src={ImageFamilyDesktop} alt=""/></div>
                    <div className="header-pattern-left"><img src={HeaderPatternLeft} alt=""/></div>

                </div>
        </div>
        )
}

export default Header;
