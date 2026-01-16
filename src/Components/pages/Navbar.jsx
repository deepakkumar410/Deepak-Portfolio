import { useState, useEffect } from "react";
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

  useGSAP(() => {
    const t1 = gsap.timeline()
    t1.from(".name-logo p, .connect , .show-web li", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
    }, 'n')
    t1.from(".menu-icon", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
    }, 'n')
  })

  const [isHidden, setIsHidden] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;


      if (current > lastScrollY && current > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = () => {
    setShowIcon(!showIcon)
  }


  return (
    <>
      <nav className={`w-full mx-auto h-[14vh] flex items-center sticky top-0 z-[1000] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),rgba(15,23,42,0.98))] backdrop-blur-[18px] shadow-[0_12px_40px_rgba(15,23,42,0.85)] transition-[transform_0.3s_ease,opacity_0.3s_ease,box-shadow_0.3s_ease,background_0.3s_ease] max-[1000px]:flex max-[1000px]:h-[12vh] max-[1000px]:shadow-[0_10px_30px_rgba(15,23,42,0.85)] ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : ""}`}>
        <div className="flex items-center justify-between w-full px-8 max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:px-4 nav-class">
          <div className="name-logo">
            <p className="text-[22px] font-bold text-white tracking-[2px] max-[1000px]:relative max-[1000px]:left-5 max-[1000px]:w-[150px] max-[1000px]:font-extrabold max-[1000px]:text-lg">ＤＥＥＰＡＫ</p>
          </div>
          <ul className={`flex list-none gap-8 items-center max-[1000px]:hidden show-web ${showIcon ? "iconOfMenu z-[1000] no-underline list-none top-[12vh] left-0 h-auto w-full gap-4 flex flex-col items-center absolute bg-[rgba(15,23,42,0.95)] backdrop-blur-[20px] border-t border-cyan-400/20 py-6 text-base shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : ""}`} >
            <li className="relative"><a href="#" onClick={() => scrollToSection("home")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Home</a></li>
            <li className="relative"><a href="#about" onClick={() => scrollToSection("about")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">About Me</a></li>
            <li className="relative"><a href="#skills" onClick={() => scrollToSection("skills")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Skills</a></li>
            <li className="relative"><a href="#experience" onClick={() => scrollToSection("experience")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Experience</a></li>
            <li className="relative"><a href="#projects" onClick={() => scrollToSection("projects")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Projects</a></li>
            <li className="relative"><a href="#contact" onClick={() => scrollToSection("contact")} className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Contact Me</a></li>
            <li className="relative"><a href="/Deepak_Kumar_CV.pdf" target="_blank" className="font-medium text-lg text-white no-underline transition-[0.9s] hover:scale-110 hover:text-gray-300 relative">Resume</a></li>
          </ul>
          <div className="connect max-[1000px]:hidden">
            <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank" className="no-underline text-white bg-gray-700 border border-gray-600 text-base py-[15px] px-5 rounded-[10px] cursor-pointer transition-[0.5s] hover:bg-gray-600 hover:border-gray-500 hover:scale-105 hover:rounded-[50px] hover:transition-all hover:duration-[1s] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"> Connect With Me</a>
          </div>
        </div>
        <div 
          className="hidden max-[1000px]:block max-[1000px]:relative max-[1000px]:right-4 max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center menu-icon cursor-pointer z-[1001] transition-all duration-300 hover:scale-110"
          onClick={handleClick}
        >
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(56,189,248,0.1)] border border-cyan-400/30 backdrop-blur-sm transition-all duration-300 ${showIcon ? 'bg-[rgba(56,189,248,0.2)] border-cyan-400/50' : ''} hover:bg-[rgba(56,189,248,0.2)] hover:border-cyan-400/50`}>
            <RiMenu3Fill className={`text-cyan-400 text-2xl transition-transform duration-300 ${showIcon ? 'rotate-90' : ''}`} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
