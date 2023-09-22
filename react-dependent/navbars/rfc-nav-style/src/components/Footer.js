import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='section-container'>
        <h5>HELP</h5>
        <a href='./' className='foot-link'>FAQ</a>
        <a href='./' className='foot-link'>Contact</a>
        <a href='./' className='foot-link'>Terms of Service</a>
        {/* <ul>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Terms of Service</li>
        </ul> */}
      </div>

      <div className='section-container'>
        <h5>GENERAL</h5>
        <a href='./' className='foot-link'>Privacy Policy</a>
        <a href='./' className='foot-link'>Do Not Sell My Personal Information</a>
        {/* <ul> 
          <li>Privacy Policy</li>
          <li>Do Not Sell My Personal Information</li>
        </ul> */}
      </div>

      <div className='subscribe-container'>
        <h5>JOIN THE NEWSLETTER</h5>
        <p>Instantly receive updates, access to exclusive deals, launch details, and more.</p>
        <input className='' type='text' placeholder='Enter email address' autoComplete='off'/>
        <button className='' > SUBSCRIBE </button>
      </div>

      <div className='reviews-container'>

      </div>
       {/* &copy; 2023. Practicing layouts with ❤ and respect for development.  */}
    </div>
  )
}
