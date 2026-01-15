import "../Css/MySkills.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const MySkills = () => {
  useGSAP(() => {
    // Ensure skills are visible by default
    gsap.set([".left1", ".right1"], {
      opacity: 1,
      y: 0,
      visibility: "visible"
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger:'.skills-container' ,
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        toggleActions: "play none none none",
      }
    });

    t3.from(".skills-container h1, .skills-para", {
      y: 30,
      opacity: 0.8,
      duration: 0.8,
      ease: "power2.out",
    },'m')
    t3.from(".left1",{
      y:50,
      opacity:0.8,
      stagger: 0.1,
      duration:0.6,
      ease: "power2.out",
    },'m')
    t3.from(".right1",{
      y:50,
      opacity:0.8,
      stagger: 0.1,
      duration:0.6,
      ease: "power2.out",
    },'m')
  }, [])
  return (
    <>
      <section id="skills" className="skills-container" >
        <h1>My Skills</h1>
        <p className="skills-para">Proficient in building dynamic, responsive web applications and RESTful APIs. Strong problem-solving skills and a passion for learning new technologies.</p>
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
          <div className="skill left1">
            <div className="all-skill">
              <p>NODE JS</p>
              <p className="nodejs-prsentg">75%</p>
            </div>
            <div className="line"><span className="nodejs-line"></span></div>
          </div>
          <div className="skill left1">
            <div className="all-skill">
              <p>EXPRESS JS </p>
              <p className="expressjs-prsentg">65%</p>
            </div>
            <div className="line"><span className="expressjs-line"></span></div>
          </div>
          <div className="skill left1">
            <div className="all-skill">
              <p>MongoDB</p>
              <p className="mongodb-prsentg">80%</p>
            </div>
            <div className="line"><span className="mongodb-line"></span></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default MySkills;
