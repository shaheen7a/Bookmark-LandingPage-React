import React from 'react'
import "./SectionFour.css"
import logoImage from "../../assets/images/logo-bookmark.svg"
import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
const SectionFour = () => {
  return (
    <div className='section-four'>
      <div className='sec-four-container'>
        <div className='footer-logo'>
          <img src={logoImage} alt="" />
        </div>

        <div className='footer-list'>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className='socials'>
          <div className='facebook'>
            <img src={facebook} alt="facebook" />
          </div>
          <div className='twitter'>
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour