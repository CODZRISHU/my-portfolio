// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logh.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I am frontend developer from India</p>
          </div>

          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder='Enter your email'/>
              </div>

              <div className="footer-subscribe">Subscribe</div>
            </div>
          </div>
          
          <hr/>
          <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Rishu Kumar Jha. All rights reserved.
</p>
        
         <div  className='footer-bottom-right'>
             <p>Terms of Services</p>
             <p>Privacy Policy</p>
             <p>connect with me</p>
          </div>


          </div>

        </div>
  
      
    )}

export default Footer
