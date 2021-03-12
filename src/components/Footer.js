import React from 'react'

import './Footer.css'

function Footer() {
    return (
      
        <div className='footer-container'>
  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Pricing</h2>
            <p>Individuals</p>
            <p>For Business</p>
         
         
          </div>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <p>Blog</p>
            <p>Press</p>
            <p>About</p>
            <p>Terms of Use</p>
   
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Partners</h2>
            <p>Flat-Mountain Resort</p>
            <p>Flat-Bread</p>
            <p>Flat-flix</p>
            
          </div>
          <div class='footer-link-items'>
            <h2>Sponsors</h2>
            <p>Bank of Flatiron</p>
   
            
          </div>
      
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
     
          </div>
          <small class='website-rights'>Flat Ping © 2021  All rights reserved.
          </small>
          <div class='social-icons'>
            <div>
              <i class='fab fa-facebook-f' />
            </div>
            <div>
              <i class='fab fa-instagram' />
            </div>
            <div >
              <i class='fab fa-youtube' />
            </div>
            <div>
              <i class='fab fa-twitter' />
            </div>
            <div >
              <i class='fab fa-linkedin' />
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer
