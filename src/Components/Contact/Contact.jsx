import React from 'react'
import './Contact.css'
import message from '../../assets/message.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f93e618e-26b5-4db8-8251-f61a9025cd07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact