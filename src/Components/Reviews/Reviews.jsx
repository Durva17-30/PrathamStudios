import React, { useRef } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import client1 from '../../assets/client_1.jpg'
import client2 from '../../assets/client_2.jpg'
import client3 from '../../assets/client_3.jpg'

const Reviews = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx = tx - 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    const slideBacward = () => {
        if(tx < 0){
            tx = tx + 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

  return (
    <div className='reviews'>
        <div className='nav-btn next-btn' onClick={slideForward}><img src={next_icon} alt=""/></div>
        <div className='nav-btn back-btn' onClick={slideBacward}><img src={back_icon} alt=""/></div>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client1} alt="" />
                            <div>
                                <h3>Saish Naik</h3>
                                <span>Usgao Tisk, Goa</span>
                            </div>
                        </div>
                        <p>Pratham Studios captured our wedding so beautifully that every photo feels alive. 
                            From the smallest rituals to the big emotional moments, everything was documented 
                            with so much elegance and care. Wedding album feels like reliving the day!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client2} alt="" />
                            <div>
                                <h3>Durva Valvaikar</h3>
                                <span>Bandora, Ponda</span>
                            </div>
                        </div>
                        <p>My 21st birthday was made even more special thanks to Pratham Studios. 
                            The pictures perfectly captured the fun, emotions, and energy of the celebration. 
                            Every shot feels candid and personal — exactly how I wanted to remember this milestone.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client3} alt="" />
                            <div>
                                <h3>Saiesh Teli</h3>
                                <span>Usgao Tisk, Goa</span>
                            </div>
                        </div>
                        <p>Pratham Studios did an outstanding job covering our business event. The photos and videos were professional, 
                            well-timed, and truly reflected the spirit of the event. Their work helped us preserve great memories while 
                            also giving us strong visuals for our brand.</p>
                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src="" alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Reviews