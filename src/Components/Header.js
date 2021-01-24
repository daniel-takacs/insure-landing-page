import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import ImageFamily from './images/image-intro-mobile.jpg';
import ImageFamilyDesktop from './images/image-intro-desktop.jpg';
import HeaderText from './HeaderText';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Router>
            <Navbar />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
                <div className="landingpage">
                    <div className="image-family"><img src={ImageFamily} alt=""/></div>
                    <HeaderText />
                    <div className="image-family-desktop"><img className="dimage"src={ImageFamilyDesktop} alt=""/></div>
                </div>
        </div>
        )
}

export default Header;
