import React from 'react'
import './Contact.css'
import message from '../../assets/message.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us A Message <img src={message} alt="" /></h3>
            <p>Feel free to reach out to Pratham Studios for bookings, queries, or collaborations. 
                Whether you’re planning a special event, looking to elevate your brand with professional visuals, 
                or simply have a question or feedback to share, we’d love to hear from you. 
                Connect with us and let’s turn your ideas into memorable visuals.</p>
                <ul>
                    <li>prathamstudios@gmail.com</li>
                    <li>+91 7391-937735</li>
                    <li>Madkai, Ponda - Goa. 403401</li>
                </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit Now</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact