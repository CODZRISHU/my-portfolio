// eslint-disable-next-line no-unused-vars
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile_img from '../../assets/LOGOR.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={ profile_img} alt="profile" />
      <h1><span>I am Rishu Kumar Jha, </span> frontend developer based in INDIA.</h1>
    
      <p>Hi, I am Rishu! I am a passionate web developer with a knack for creating dynamic and responsive websites. With a strong foundation in JavaScript, React, and modern web technologies, I enjoy building projects that solve real-world problems and enhance user experiences. </p>
      <div className='hero-action'>
      <div className='hero-connect'><AnchorLink  className='anchorlink' offset={50}  href='#contact'>Connect With Me</AnchorLink></div>
      <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero
