import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/Menu.png'

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

    const[ mobileMenu, setMobileMenu ] = React.useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-navbar' : ''}`}>
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0}duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} offset={-200}duration={500}>Services</Link></li>
        <li><Link to="about" smooth={true} offset={-150}duration={500}>About Us</Link></li>
        <li><Link to="work" smooth={true} offset={-260}duration={500}>Our Work</Link></li>
        <li><Link to="reviews" smooth={true} offset={-260}duration={500}>Reviews</Link></li>
        <li><Link to="contact" smooth={true} offset={-260}duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar