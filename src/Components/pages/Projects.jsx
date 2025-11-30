import React from "react";
import "../Css/Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  useGSAP(() => {
    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-container',
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 10%",
        scrub: 3,
      }
    });

    t5.from("#projects", {
      y: 50,
      stagger: 0.4,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    }, 'm')
    t5.from(".left", {
      y: 150,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      delay: 0.5,
    }, 'm')
    t5.from(".right", {
      y: 150,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      delay: 0.5,
    }, 'm')
  })


  return (
    <>
      <section id="projects" className="projects-container">
        <h1>Projects</h1>
        <div className="all-projects-box">
          <div className="box left" >
            <a href="https://dpkrestaurant.netlify.app/" target="_blank">
              <video
                autoPlay
                loop
                muted

                src="aniamtion-websites.mp4"
              >


              </video>
              <p className="sites-name"> ❖ Food Delivery Website with Animation</p>
              <p className="sites-details">
                Build a Animation websites using Html, Css, And JavaScript. And
                for the animation we use GSAP (GreenSock Animation Platform).
              </p>
            </a>
          </div>
          <div className="box right">
            <a href="https://clone-deepakraii.netlify.app/" target="_blank">
              <video
                autoPlay
                loop
                muted

                src="Netflix-clone website.mp4"
              ></video>
              <p className="sites-name">❖ Netflix Clone </p>
              <p className="sites-details">
                Creating a Netflix clone involves more than just structuring HTML
                and CSS. it's about replicating the user experience and aesthetic
                of the platform
              </p>
            </a>
          </div>
          <div className="box left">

            <video
              autoPlay
              loop
              muted

              src="Instagram-clone.mp4"
            ></video>
            <p className="sites-name">❖ Instagram Clone Page </p>
            <p className="sites-details">
              Creating an Instagram clone page using HTML, CSS, and JavaScript
              involves building a posting page where users can scroll through
              posts, similar to the original Instagram platform.
            </p>
          </div>
          <div className="box right">
            <a href="https://animate-x-animation.vercel.app/" target="_blank">
              <video
                autoPlay
                loop
                muted

                src="Animation webbb - Made with Clipchamp.mp4"
              ></video>
              <p className="sites-name"> ❖ Animate-X (GSAP Animation Website)</p>
              <p className="sites-details">
                A fully responsive animation website built using React and GSAP, featuring smooth motion effects, scroll-based animations, and modern transitions. Focused on delivering a visually rich experience with optimized performance and Vercel deployment.
              </p>
            </a>

          </div>
         
        </div>
      </section>
    </>
  );
};

export default Projects;
