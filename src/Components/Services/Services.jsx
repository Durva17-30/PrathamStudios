import React from 'react'
import './Services.css'
import service1 from '../../assets/service_1.jpg'
import service2 from '../../assets/service_2.webp'
import service3 from '../../assets/service_3.jpg'
// import camera_icon from '../../assets/camera.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
                {/* <img src={camera_icon} alt="" /> */}
                <p>Customised Wedding Package</p>
            </div>
        </div>
        <div className="service">
            <h1>Moments that turn your special day into lasting memories.</h1>
            <img src={service2} alt="" />
            <div className="caption">
                {/* <img src={camera_icon} alt="" /> */}
                <p>Model Portfolio & Brand Shoots</p>
            </div>
        </div>
        <div className="service">
                <h1>From brand shoots to events,we make every frame count.</h1>
            <img src={service3} alt="" />
            <div className="caption">
                {/* <img src={camera_icon} alt="" /> */}
                <p>Commercial Events & much more...</p>
            </div>
        </div>
    </div>
  )
}

export default Services