// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/rishunewphot.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className='about-section'>
        <div className='about-left'>
             <img className ="me" src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
             <div className='about-para'>
              <p>I am a passionate web developer with a knack for creating dynamic and responsive websites. With a strong foundation in JavaScript, React, and modern web technologies, I enjoy building projects that solve real-world problems and enhance user experiences. </p>
              <p>Welcome to my portfolio, where you can explore my work and get to know more about my journey in the tech world. Lets connect and create something amazing together! </p>

             </div>
             <div className="about-skills">
                <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>REACT.JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JAVA</p><hr style={{width:"60%"}} /></div>
             </div>
          </div>
        </div>
          <div className="about-acadmics">
            <div className="about-acadmic">
              <h1>92%</h1>
              <p>In Matriculation</p>
            </div>
            <hr/>
            <div className="about-acadmic">
              <h1>88%</h1>
              <p>In INTERMEDIATE</p>
            </div>
            <hr/>
            <div className="about-acadmic">
             <h1>8 CGPA</h1>
             <p>In BTECH</p>
           </div>
            
             
          </div>
  


      </div>
      
    
  )
}

export default About
