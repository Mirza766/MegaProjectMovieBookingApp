import React from 'react'
import "../stylingSheets/Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <section className='footer-master-cont'>
        <div className='footer-cont'>
            <div className='foot-left'>
                <div className='foot-img-cont'>
            <div className='foot-img-div'>
              <img className='cine-img' style={{height:'100px',
                width:'100px'
              }} src='images/foot-logo.png' alt='foot-img'/>
            </div>
            <div className='foot-left-cont'>
                <p className='inside-cont'>
   Dive into the world of movies like never before with seamless booking, premium plans, and exclusive cinematic waves of entertainment.
From the latest blockbusters to hidden gems — CineWave brings the silver screen closer to you, one click at a time!
</p>
            </div>
            </div>
            <div className='foot-logos'>
         <img src='images/Social.png' alt='foot-logo'/>
            </div>
             </div>
             <div className='foot-right-cont'>
                <div className='foot-right'>  
                <div className='foot-right-heading'>
                    Pages
                </div>
                <div className='footer-links'>
                   <Link className='footer-links' to='/about'>About</Link>
                   <Link className='footer-links' to='/pricing'>Pricing</Link>
                   <Link className='footer-links' to='/contact'>Contact</Link>
                </div>
             </div>

              <div className='foot-right'>  
                <div className='foot-right-heading'>
                    Help
                </div>
                <div className='footer-links'>
                   <Link className='footer-links' to='/about'>Customer Support</Link>
                   <Link className='footer-links' to='/pricing'>Terms and Conditions</Link>
                   <Link className='footer-links' to='/contact'>Privacy Policy</Link>
                </div>
             </div>

              <div className='foot-right'>  
                <div className='foot-right-heading'>
                    Contact
                </div>
                <div className='footer-links'>
                   <Link className='footer-links' to='/about'>Get in Touch</Link>
                   <Link className='footer-links' to='/pricing'>Explore Questions</Link>
                   <Link className='footer-links' to='/contact'>Complains</Link>
                </div>
             </div>
             </div>
        </div>
    </section>
  )
}

export default Footer