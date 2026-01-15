import React, { useState } from "react";
import "../Css/Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";

import { useGSAP } from "@gsap/react";
import gsap from "gsap"
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };  

  useGSAP(()=>{
    const t1 = gsap.timeline()
    t1.from(".name-logo p, .connect , .show-web li",{
      y: -100,
      opacity:0,
      stagger: 0.1,
      duration: 1,
      delay:0.5 ,
    },'n')
    t1.from(".menu-icon",{
      y: -100,
      opacity:0,
      stagger: 0.1,
      duration: 1,
      delay:0.5 ,
    },'n')
 
  })
  const [showIcon , setShowIcon] = useState(false)
  const handleClick = ()=>{
   setShowIcon(!showIcon)
  }
  

  return (
    <>
      <nav className="navbar-container">
        <div className="nav-class">   
          <div className="name-logo">
            <p>ＤＥＥＰＡＫ</p>
          </div> 
          <ul className= {showIcon ? "iconOfMenu  ":"show-web"} >
            <li><a href="#" onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection("about")}>About Me</a></li>
            <li><a href="#skills" onClick={() => scrollToSection("skills")}>Skills</a></li>
            <li><a href="#experience" onClick={() => scrollToSection("experience")}>Experience</a></li>
            <li><a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact Me</a></li>
            <li><a href="Deepak_kumar_CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
          <div className="connect">
          <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank" className="connect-btn"> Connect With Me</a>
          </div>
        </div>
        <div className="menu-icon" onClick={handleClick}><RiMenu3Fill /></div>
      </nav>
    </>
  );
};

export default Navbar;