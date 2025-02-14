import React, { useRef } from "react";
import "../Css/MySkills.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const MySkills = () => {
  const scroller = useRef();
  useGSAP(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger:'.skills-container' ,
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
      }
    });

    t3.from(".skills-container h1, .skills-para", {
      y: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    },'m')
  t3.from(".left1",{
    y:150,
    opacity:0,
    duration:1.5,
    delay:0.5,
  },'m')
  t3.from(".right1",{
    y:150,
    opacity:0,
    duration:1.5,
    delay:0.5,
  },'m')
  })
  return (
    <>
      <section id="skills" className="skills-container" >
        <h1>My Skills</h1>
        <p className="skills-para">Motivated and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. Proficient in creating responsive and visually appealing web applications. </p>
        <div className="skill-line">
          <div className="skill  left1">
            <div className="all-skill">
              <p>C++</p>
              <p className="cpp-prsentg">80%</p>
            </div>
            <div className="line"><span className="cpp-line"></span></div>
          </div>
          <div className="skill right1">
            <div className="all-skill">
              <p>HTML5</p>
              <p className="html-prsentg">90%</p>
            </div>
            <div className="line"><span className="html-line"></span></div>
          </div>
          <div className="skill left1">
            <div className="all-skill">
              <p>CSS3</p>
              <p className="css-prsentg">75%</p>
            </div>
            <div className="line"><span className="css-line"></span></div>
          </div>
          <div className="skill right1">
            <div className="all-skill">
              <p>JAVASCRIPT</p>
              <p className="js-prsentg">70%</p>
            </div>
            <div className="line"><span className="js-line"></span></div>
          </div>
          <div className="skill left1">
            <div className="all-skill">
              <p>REACT JS</p>
              <p className="react-prsentg">90%</p>
            </div>
            <div className="line"><span className="react-line"></span></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
