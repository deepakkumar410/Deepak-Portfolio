import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaLock, FaMagic } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostman, SiVercel, SiSocketdotio, SiMongoose } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger)

const MySkills = () => {
  const getSkillIcon = (skill) => {
    const iconMap = {
      "React.js": FaReact,
      "JavaScript (ES6+)": FaJs,
      "Tailwind CSS": SiTailwindcss,
      "Redux Toolkit": SiRedux,
      "RTK Query": SiRedux,
      "HTML5": FaHtml5,
      "CSS3": FaCss3Alt,
      "GSAP": FaMagic,
      "Node.js": FaNodeJs,
      "Express.js": SiExpress,
      "REST APIs": TbApi,
      "Socket.io": SiSocketdotio,
      "MongoDB": SiMongodb,
      "Mongoose": SiMongoose,
      "Git": FaGitAlt,
      "GitHub": FaGithub,
      "Postman": SiPostman,
      "JWT Auth": FaLock,
      "Vercel / Netlify Deployment": SiVercel,
      "Responsive UI Design": FaCss3Alt,
    };
    return iconMap[skill] || null;
  };

  const getSkillColor = (skill) => {
    const colorMap = {
      "React.js": "#61DAFB", // React cyan
      "JavaScript (ES6+)": "#F7DF1E", // JavaScript yellow
      "Tailwind CSS": "#06B6D4", // Tailwind cyan
      "Redux Toolkit": "#764ABC", // Redux purple
      "RTK Query": "#764ABC", // Redux purple
      "HTML5": "#E34F26", // HTML5 orange
      "CSS3": "#1572B6", // CSS3 blue
      "GSAP": "#88CE02", // GSAP green
      "Node.js": "#339933", // Node.js green
      "Express.js": "#ffffff", // Express black
      "REST APIs": "#00A8E8", // API blue
      "Socket.io": "#ffffff", // Socket.io black
      "MongoDB": "#47A248", // MongoDB green
      "Mongoose": "#880000", // Mongoose red
      "Git": "#F05032", // Git orange
      "GitHub": "#ffffff", // GitHub white
      "Postman": "#FF6C37", // Postman orange
      "JWT Auth": "#ffffff", // JWT black
      "Vercel / Netlify Deployment": "#ffffff", // Vercel black
      "Responsive UI Design": "#1572B6", // CSS3 blue
    };
    return colorMap[skill] || "#ffffff";
  };

  // Original skills organized in grid
  const skills = [
    "React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit",
    "RTK Query", "HTML5", "CSS3", "GSAP",
    "Node.js", "Express.js", "REST APIs", "Socket.io",
    "MongoDB", "Mongoose", "Git", "GitHub",
    "Postman", "JWT Auth", "Vercel / Netlify Deployment", "Responsive UI Design"
  ];

  useGSAP(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-container',
        scroller: "body",
        start: "top 85%",
        end: "top 20%",
        scrub: false,
        toggleActions: "play none none reverse",
        markers: false,
      }
    });

    // Header animation
    t3.from(".skills-header-box", {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
    }, 0)
    
    // Skill badges animation - animate from hidden state to visible
    t3.fromTo(".skill-badge", 
      {
        y: 30,
        opacity: 0,
        scale: 0.7,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          each: 0.05,
          from: "start",
        },
        duration: 0.8,
        ease: "back.out(1.4)",
      }, 
      0.3
    );
  }, [])

  return (
    <>
      <section id="skills" className="relative min-h-screen py-10 md:py-20 px-3 md:px-4 overflow-hidden skills-container">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header - My Skills (My in white, Skills in red) */}
          <div className="text-center mb-4 md:mb-8 skills-header-box pt-4 md:pt-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4">
              <span className="text-white">My</span> <span className="">Skills</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-6 md:mb-12 skills-subtitle px-2">
            <p className="text-sm md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Proficient in building dynamic, responsive web applications and RESTful APIs. Strong problem-solving skills and a passion for learning new technologies.
            </p>
          </div>

          {/* Skills Grid - 4x5 layout */}
          <div className="max-w-6xl mx-auto px-2 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {skills.map((skill, idx) => {
                const IconComponent = getSkillIcon(skill);
                const iconColor = getSkillColor(skill);
                return (
                  <div 
                    key={idx} 
                    className="skill-badge bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.05),rgba(15,23,42,0.3))] backdrop-blur-[20px] border border-white/10 flex flex-col items-center justify-center p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-2 hover:border-white/20 cursor-pointer group"
                    style={{ opacity: 1 }}
                  >
                    {IconComponent && (
                      <IconComponent 
                        className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: iconColor }}
                      />
                    )}
                    <span className="text-white text-[10px] md:text-xs lg:text-sm font-semibold text-center transition-all duration-300 group-hover:text-cyan-300 leading-tight px-1">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
