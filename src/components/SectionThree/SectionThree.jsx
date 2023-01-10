import React from 'react'
import "./SectionThree.css"

const SectionThree = () => {
  return (
    <div className='section-three'>
      <div className='sec-three-container'>
        <div className='joined'>
          <p>35,000+ already joined</p>
        </div>

        <div className='title'>
          <h3>Stay up-to-date with what we’re doing</h3>
        </div>

        <div className='form'>
          <label htmlFor=""></label>
          <input type="text" placeholder='Enter your email address' />
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default SectionThree