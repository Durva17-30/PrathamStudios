import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Where Stories Meet Visual Excellence</h1>
            <p>Every event has a story, and we make sure it’s told beautifully. 
                Pratham Studios blends creativity and precision to capture emotions, 
                details, and moments that turn your special day into lasting memories.</p>
            <button className='btn'>Explore Our Work <img src={dark_arrow} alt="" className='arrow-image' /></button>
        </div>
    
    </div>
  )
}

export default Hero