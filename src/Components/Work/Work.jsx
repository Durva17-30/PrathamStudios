import React from 'react'
import './Work.css'
import work1 from '../../assets/work_1.jpg'
import work2 from '../../assets/work_2.jpg'
import work3 from '../../assets/work_3.jpg'
import work4 from '../../assets/work_4.jpg'

const Work = () => {
  return (
    <div className='work'>
        <div className="gallery">
            <img src={work1} alt="" />
            <img src={work2} alt="" />
            <img src={work3} alt="" />
            <img src={work4} alt="" />
        </div>
        <button className='btn dark-btn'>View More Here <img src="" alt="" /></button>
    </div>
  )
}

export default Work