import React from 'react'
import "./SectionTwo.css"
import Card01 from "./Card01"
import Card02 from "./Card02"
import Card03 from "./Card03"
const SectionTwo = () => {
  return (
    <div className='section-two'>
      <div className='title'>
        <h2>Download the extension</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.</p>
      </div>

      <div className='cards'>
        <Card01 />
        <Card02 />
        <Card03 />
      </div>
    </div>
  )
}

export default SectionTwo