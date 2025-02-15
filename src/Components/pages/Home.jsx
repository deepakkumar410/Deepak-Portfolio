import React, { useRef } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../Css/Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

gsap.registerPlugin(useGSAP);
const Home = () => {

 const [text] = useTypewriter({
  words : ['Deepak Kumar', 'Frontend Developer'],
  loop : {},
 })


 useGSAP(()=>{

  
  gsap.from(".my-info",{
    x: -100,
    opacity:0,
    stagger:0.5,
    duration: 1.5,
    delay:0.5 ,
  }),
  gsap.from(".icon",{
    scale: 0,
    opacity:0,
    duration: 1.5,
    delay:0.5 ,
  })
  gsap.from(".dpk-img",{
    x:100,
    opacity:0,
    duration: 1.5,
    delay:0.5 ,
  })

  })
  return (
    <>
      <section id="home " className="home-container">
        <div className="left-side">
          <div className="my-info">
            <h1> Hi !</h1>
            <h1>
              I'm <span className="my-name">{text}</span>
              <span style={{color:'rgb(42, 170, 248)'}}><Cursor/></span>
            </h1>
            
            <p className="info-para">
              I'm Frontend Web Developer and I've keen interest in frontend Web
              development. I'm proficient in core web technology like HTML,
              CSS, JAVASCRIPT. And have been actively learnig and exploring the
              React Framework.
            </p>
          </div>
          <div className="link-icon">
            <div className="icon">
             <a href="https://www.facebook.com/share/1F7YqfrqAP/" target="_blank"> <BiLogoFacebook /></a>
            </div>
            <div className="icon">
             <a href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" target="_blank"> <GrInstagram /></a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank"> <FaLinkedinIn /></a>
            </div>
            <div className="icon">
             <a href="https://github.com/deepakkumar410" target="_blank"> <FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="dpk-img">
            <img src="photo.jpg" alt="" /> 
          </div>
        </div>
      </section>
    </>
  );
};
//
export default Home;
