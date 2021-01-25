import React from 'react';
import IconSnappy from './images/icon-snappy-process.svg';
import IconAffordable from './images/icon-affordable-prices.svg';
import IconPeople from './images/icon-people-first.svg';
import './Main.css';
import MainPattern from './images/bg-pattern-how-we-work-desktop.svg';

export default function Main() {
    return (
        <div className="main">
           <h2>We’re different</h2>

            <div className="wrapper-cards">
               <div className="container">
                <img src={IconSnappy} alt=""/>
                <h3>Snappy Process</h3>
                <p>Our application process can be completed 
                   in minutes, not hours. Don’t get 
                    stuck filling in tedious forms.</p>
               </div> 
              
               <div className="container">
               <img src={IconAffordable} alt=""/>
               <h3>Affordable Prices</h3>
               <p>We don’t want you worrying about high monthly 
                    costs. Our prices may be low, 
                    but we still offer the best coverage possible.</p>
               </div>

               <div className="container">
               <img src={IconPeople} alt=""/>
               <h3>People First</h3>
               <p>Our plans aren’t full of conditions and 
                   clauses to prevent payouts. We make 
                    sure you’re covered when you need it.</p>
               </div> 
            </div>

               <div className="main-bottom">
               
                <h2>Find out more about how we work</h2>
                <div className="main-button"><button>How we work</button></div>
                <div className="main-pattern"><img src={MainPattern} alt=""/></div>
               </div>
        </div>
    )
}
