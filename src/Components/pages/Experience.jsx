import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "DEEPNAP SOFTECH",
      position: "Full Stack Developer",
      location: "Faridabad, India",
      duration: "April 2025 - Present",
      description: "Developed a fully responsive web application with custom UI components, implementing frontend logic with React and RTK Query , TanStack Query, and backend APIs using Node.js and Express.js for dynamic workflows and seamless performance. "
    }
  ];

  
  useGSAP(() => {
    // Ensure content is visible by default
    gsap.set([".experience-card"], {
      opacity: 1,
      y: 0,
      visibility: "visible"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience-container',
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        toggleActions: "play none none none",
        markers: false,
      }
    });

    // Animate from slightly below, but start visible
    tl.from(".experience-header", {
      y: 20,
      opacity: 0.8,
      duration: 0.6,
      ease: "power2.out",
    })
    .from(".experience-card", {
      y: 30,
      opacity: 0.8,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.2")
  }, []);

  return (
    <>
      <section id="experience" className="w-[90%] max-w-[1200px] mx-auto pt-[100px] pb-[100px] relative z-[1] min-h-[500px] overflow-visible max-[1000px]:w-full max-[1000px]:p-20 max-[768px]:pt-16 max-[768px]:pb-12 max-[768px]:px-4 max-[768px]:w-full experience-container">
        <div className="text-center mb-20 max-[768px]:mb-8 max-[768px]:mt-4 experience-header">
          <h1 className="text-[55px] font-extrabold mb-[15px] text-white max-[1000px]:text-[40px] max-[768px]:text-3xl max-[768px]:mb-2">My <span className="text-gray-300 highlight">Experience</span></h1>
          <p className="text-lg text-white/70 font-light max-[768px]:text-base experience-subtitle">Professional journey and personal projects</p>
        </div>

        <div className="relative max-w-[900px] mx-auto experiences-wrapper">
          {/* Timeline line */}
          <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gray-700 max-[768px]:left-[15px] timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 max-[768px]:mb-8 experience-card">
              {/* Timeline dot */}
              <div className="absolute left-[22px] top-2 w-4 h-4 rounded-full bg-gray-500 border-4 border-gray-900 z-10 max-[768px]:left-[9px] max-[768px]:w-3 max-[768px]:h-3 timeline-dot"></div>
              
              {/* Content card */}
              <div className="ml-16 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] border border-[rgba(148,163,184,0.35)] rounded-[20px] p-6 transition-all duration-[0.4s] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.9)] hover:border-[rgba(56,189,248,0.7)] max-[768px]:ml-8 max-[768px]:p-4">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4 max-[768px]:flex-col max-[768px]:gap-2">
                  <div className="flex items-center gap-4 max-[768px]:gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[rgba(75,85,99,0.2)] to-[rgba(75,85,99,0.1)] border-2 border-[rgba(75,85,99,0.3)] rounded-xl flex items-center justify-center text-xl text-gray-400 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-lg">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white m-0 max-[768px]:text-xl">{exp.company}</h2>
                      <h3 className="text-lg font-semibold text-gray-400 m-0 max-[768px]:text-base">{exp.position}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-white/70 max-[768px]:text-xs">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/85">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="personal-projects-section">
          <h2 className="section-title">Personal Projects</h2>
          <div className="personal-projects-grid">
            {personalProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <FaCode className="project-card-icon" />
                  <h3 className="project-card-title">{project.name}</h3>
                </div>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Experience;

