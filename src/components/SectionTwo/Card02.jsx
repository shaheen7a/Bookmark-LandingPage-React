import React from 'react'
import cardLogo from "../../assets/images/logo-firefox.svg"
import dots from "../../assets/images/bg-dots.svg"

const Card02 = () => {
  return (
    <div className='card02'>
      <div className='card-container'>
        <div className='logo-img'>
          <img src={cardLogo} alt="" />
        </div>

        <div className='card-title'>
          <h4>Add to Firefox</h4>
          <p>Minimum version 55</p>
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

export default Card02