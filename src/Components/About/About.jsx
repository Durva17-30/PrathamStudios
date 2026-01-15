import React from 'react'
import './About.css'
import cover from '../../assets/coverplay.png'
import play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={cover} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About Pratham Studios</h3>
            <h2>Crafting Visual Stories That Elevate Brands and Moments</h2>
            <p>Pratham Studios is a creative photography and video production studio driven by passion, 
                precision, and purpose. We specialize in creating impactful visuals that help businesses 
                stand out while giving every event a special, personal touch. </p>
                
            <p>From brand campaigns and commercial shoots to celebrations and milestones, 
                we focus on storytelling that feels authentic and timeless. With an eye for detail and 
                a commitment to quality, we turn ideas into visuals that leave a lasting impression.</p>
        </div>
    </div>
  )
}

export default About