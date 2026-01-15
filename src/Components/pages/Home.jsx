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
    words: ['Deepak Kumar', 'Web Developer'],
    loop: true,
    typeSpeed: 80,      // typing smooth
    deleteSpeed: 50,    // deleting smooth
    delaySpeed: 1500,   // pause between words
  });



  useGSAP(() => {
    // Ensure image is visible by default
    gsap.set(".dpk-img", {
      opacity: 1,
      x: 0,
      scale: 1,
      visibility: "visible"
    });

    const tl = gsap.timeline();

    tl.from(".my-info h1", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })

      .from(".info-para", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .from(".dpk-img", {
        x: 50,
        opacity: 0.5,
        scale: 0.9,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
  })
  return (
    <>
      <section id="home" className="home-container">
        <div className="left-side">
          <div className="my-info">
            <h1>Hi!</h1>
            <h1>
              I am <span className="my-name no-gsap">{text}</span>

              <span className="cursor">
                <Cursor cursorBlinking />
              </span>

            </h1>

            <p className="info-para">
              I am a MERN stack developer with a strong understanding of web development using MongoDB, Express.js, React.js and Node.js. I focus on building user-friendly, performant web applications and APIs.
            </p>
          </div>
          <div className="link-icon">
            <div className="icon facebook">
              <a href="https://www.facebook.com/share/1F7YqfrqAP/" target="_blank">
                <BiLogoFacebook />
              </a>
            </div>

            <div className="icon instagram">
              <a href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" target="_blank">
                <GrInstagram />
              </a>
            </div>

            <div className="icon linkedin">
              <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="icon github">
              <a href="https://github.com/deepakkumar410" target="_blank">
                <FaGithub />
              </a>
            </div>

          </div>
        </div>
        <div className="right-side">
          <div className="dpk-img">
            <img
              src="/photo.jpg"
              alt="Deepak Kumar"
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.style.display = "none";
              }}
              onLoad={() => {
                console.log("Image loaded successfully");
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
//
export default Home;
