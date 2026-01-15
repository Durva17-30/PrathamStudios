import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {

  const [playState, setPlayState] = React.useState(false);
  return (

    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subtitle="OUR SERVICES" title="What We Offer"/>
          <Services/>
          <About setPlayState={setPlayState}/>
          <Title subtitle="GALLERY" title="Our Work"/>
          <Work/>
          <Title subtitle="Reviews" title="What Our Client Says"/>
          <Reviews/>
          <Title subtitle="Contact us" title="Get In Touch"/>
          <Contact/>
          <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App