import React from 'react'
import './SectionOne.css'
import illustration from "../../assets/images/illustration-hero.svg";
const SectionOne = () => {
  return (
    <div className='section-one'>
      <div className='context'>
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='section-one-btns'>
          <button className='chrome-btn'>Get it on Chrome</button>
          <button className='firefox-btn'>Get it on Firefox</button>

        </div>
      </div>
      <div className='image'>
        <img src={ illustration } alt="" />
      </div>
    </div>
  )
}

export default SectionOne