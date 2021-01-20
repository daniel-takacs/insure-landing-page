import React from 'react';
import './HeaderText.css';
import PatternIntroLeftMobile from './images/bg-pattern-intro-left-mobile.svg';
import PatternIntroRightMobile from './images/bg-pattern-intro-right-mobile.svg';

function HeaderText() {
    return (
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
    )
}

export default HeaderText
