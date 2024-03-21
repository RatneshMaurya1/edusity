import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Teastimonials from './components/Teastimonials/Teastimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'




const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
  <div>
    <Navbar/>
    <Hero />
    <div className="container">
    <Title subTitle="Our Program" title="What We Offer"/> 
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus/> 
    <Title subTitle="TESTIMONIALS" title="What Students Says"/>
    <Teastimonials/>
    <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer />
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
    
  </div>
  )
}

export default App
