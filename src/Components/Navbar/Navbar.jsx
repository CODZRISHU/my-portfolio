
// eslint-disable-next-line no-unused-vars
import React, { useState ,useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


import  './Navbar.css'

import logo from '../../assets/logh.png'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {
  const[menu,setmenu]= useState("home");
  const menuRef= useRef();
   
  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
       <img src= {logo} alt="rishu" />
       <img src={menu_open} onClick={openMenu}alt='' className='nav-mob-open'/>
       <ul ref={menuRef} className="nav-menu">
         <img src={menu_close} onClick={closeMenu}alt="" className='nav-mob-close'/>
        <li><AnchorLink className='anchorlink' href='#home' ><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50}  href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  className='anchorlink' offset={50}  href='#services'><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  className='anchorlink' offset={50}  href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  className='anchorlink' offset={50}  href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
       </ul>
       <div className='nav-connect'><AnchorLink  className='anchorlink' offset={50}  href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
