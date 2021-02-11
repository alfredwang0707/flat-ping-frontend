import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <p></p>
         
         
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
      
   
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Partners</h2>
     
            
          </div>
          <div class='footer-link-items'>
            <h2>Sponsors</h2>
       
   
            
          </div>
      
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
     
          </div>
          <small class='website-rights'>Flat Ping © 2021  All rights reserved.
          </small>
          
          
        </div>
      </section>
    </div>
    )
}

export default Footer
