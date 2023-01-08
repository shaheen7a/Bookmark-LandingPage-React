import React from 'react'
import './Header.css'
import logoImage from "../../assets/images/logo-bookmark.svg"

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        {/* logo */}
        <div className='logo'>
          <img src={logoImage} alt="logo" />
        </div>

        {/* menu-list */}
        <div className='menu-list'>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header