import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const[ sticky, setSticky ] = React.useState(false);
    
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50){
                setSticky(true);
            } else {
                setSticky(false);
            }
    })}, []);

  return (
    <nav className={`container ${sticky ? 'dark-navbar' : ''}`}>
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Our Work</li>
        <li>Reviews</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar