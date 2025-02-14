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
    t1.from(".name-logo p, .connect",{
      y: -100,
      opacity:0,
      stagger: 0.1,
      duration: 1,
      delay:0.5 ,
    })
 
  })
 
  const handleClick = ()=>{

  }
  

  return (
    <>
      <nav className="navbar-container">
        <div className="nav-class">   
          <div className="name-logo">
            <p>ＤＥＥＰＡＫ</p>
          </div> 
          <div className="menu-icon" onClick={handleClick}><RiMenu3Fill /></div>
          <ul className="nav-list" >
            <li><a href="#" onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection("about")}>About Me</a></li>
            <li><a href="#skillss" onClick={() => scrollToSection("skills")}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact Me</a></li>
            <li><a href="../public/Deepak_kumar_CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
          <div className="connect">
          <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank" className="connect-btn"> Connect With Me</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;