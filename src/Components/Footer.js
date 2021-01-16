import React from 'react';
import Logo from './images/logo.svg';
import IconFacebook from './images/icon-facebook.svg';
import IconTwitter from './images/icon-twitter.svg';
import IconPinterest from './images/icon-pinterest.svg';
import IconInstagram from './images/icon-instagram.svg';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="logo-footer"><img src={Logo} alt=""/></div>
            <div className="social-icons">
                <img src={IconFacebook} alt=""/>
                <img src={IconTwitter} alt=""/>
                <img src={IconPinterest} alt=""/>
                <img src={IconInstagram} alt=""/>
            </div>
            <div className="footer-links">
                <div className="footer-link">
                    <h4>Our company</h4>
                    <a href="">How we work</a>
                    <a href="">Why Insure?</a>
                    <a href="">View plans</a>
                    <a href="">Reviews</a>
                </div>
                <div className="footer-link">
                    <h4>Help me</h4>
                    <a href="">FAQ</a>
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>
                </div>
                <div className="footer-link">
                    <h4>Contact</h4>
                    <a href="">Sales</a>
                    <a href="">Support</a>
                    <a href="">Live chat</a>
                </div>
                <div className="footer-link">
                    <h4>Others</h4>
                    <a href="">Careers</a>
                    <a href="">Press</a>
                    <a href="">Licenses</a>
                </div>
            </div>
            <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Daniel Takacs</a>.
  </div>
        </div>
    )
}

export default Footer
