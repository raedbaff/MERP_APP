import React from 'react'
import Navbar from '../NavBar/navbar'
import "./aboutPage.css"
const about = () => {
  return (
    <>
    <Navbar />
    <div className="about-page">
    <div className="content">
      <h1>About Baff PC</h1>
      <p>Baff PC is dedicated to delivering high-performance gaming PCs tailored to meet the needs of gamers worldwide. With cutting-edge technology and meticulous craftsmanship, we strive to provide the ultimate gaming experience.</p>
      <p>Our team of passionate enthusiasts works tirelessly to push the boundaries of gaming innovation. From custom-built rigs to pre-configured systems, we offer a range of options to suit every gamer's preferences.</p>
      <p>At Baff PC, we believe that gaming is more than just a hobby—it's a way of life. Join us as we continue to redefine what's possible in the world of gaming.</p>
    </div>
  </div>
    </>
    
  )
}

export default about