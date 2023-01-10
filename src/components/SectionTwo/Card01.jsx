import React from 'react'
import cardLogo from "../../assets/images/logo-chrome.svg"
import dots from "../../assets/images/bg-dots.svg"

const Card01 = () => {
  return (
    <div className='card01'>
      <div className='card-container'>
        <div className='logo-img'>
          <img src={cardLogo} alt="" />
        </div>

        <div className='card-title'>
          <h4>Add to Chrome</h4>
          <p>Minimum version 62</p>
        </div>

        <div className='dots'>
          <img src={ dots } alt="" />
        </div>

        <div className='add-btn'>
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  )
}

export default Card01