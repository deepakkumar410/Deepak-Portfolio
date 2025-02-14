import React from "react";
import "../Css/AboutMe.css";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger:'.about-me-container',
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 4,
      }
    });

    t1.from(".about-text", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    }, 'a'),
      t1.from(".img img", {
        y:100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      }, 'a'),
      t1.from(".download-btn", {
       y:100,
        scale: 0,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      }, 'a'),
      t1.from(".skill-info p", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        delay: 0.5,
      }, 'a')

  })
  return (
    <>
      <section id="about" className="about-me-container">
        <h1 className="about-text">About Me</h1>
        <div className="all-details">
          <div className="img">
            <img src="photo.jpg" alt="" />
          </div>
          <div className="skill-info">
            <p>
              Dedicated Frontend Developer with a strong foundation in web
              development fundamentals. Proficient in HTML, CSS, and JavaScript,
              eager to apply my skills to build innovative and user-friendly web
              applications.
            </p>

            <div className="name-details">
              <div className="name-form">
                <p>Name:</p>
                <p>Death of birth : </p>
                <p>Address : </p>
                <p>Email : </p>
                <p>Phone No : </p>
              </div>
              <div className="name-form2" >
                <p>Deepak Kumar</p>
                <p>Mar 01,2004</p>
                <p>Haryana, Faridabad</p>
                <p>deepakrai880899@gmail.com</p>
                <p>8808994460</p>
              </div>
            </div>
            <div className="download-btn">
               <a href="../public/Deepak_kumar_CV.pdf" target="_blank" download="Deepak_kumar_CV.pdf" className="resume-pdf">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
