import React, { useState } from "react";
import "../Css/Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Food Delivery Website with Animation",
      description: "Build a Animation websites using Html, Css, And JavaScript. And for the animation we use GSAP (GreenSock Animation Platform).",
      video: "/aniamtion-websites.mp4",
      link: "https://dpkrestaurant.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      category: "Frontend"
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Creating a Netflix clone involves more than just structuring HTML and CSS. it's about replicating the user experience and aesthetic of the platform",
      video: "/Netflix-clone website.mp4",
      link: "https://clone-deepakraii.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      category: "Frontend"
    },
    {
      id: 3,
      title: "Instagram Clone Page",
      description: "Creating an Instagram clone page using HTML, CSS, and JavaScript involves building a posting page where users can scroll through posts, similar to the original Instagram platform.",
      video: "/Instagram-clone.mp4",
      link: null,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend"
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      description: "Developed a simple Tic-Tac-Toe game using HTML, CSS, and JavaScript, featuring a responsive user interface and basic game logic.",
      video: "/Tic-Toc-Toe game.mp4",
      link: "https://tic-toc-toe-by-dpk.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Game"
    },
    {
      id: 5,
      title: "Student Registration Form",
      description: "Create a student registration form using React.js, Node.js, Express.js, and MongoDB. When a user submits the data, it will be stored in the database. Additionally, include a delete button that removes the data from the database.",
      video: "/Student  Registration Form.mp4",
      link: "https://delicate-pavlova-cc8858.netlify.app/",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      category: "Full Stack"
    }
  ];

  useGSAP(() => {
    // Set initial state to ensure cards are visible
    gsap.set(".project-card", {
      opacity: 1,
      y: 0
    });

    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-container',
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: false,
        toggleActions: "play none none none",
      }
    });

    t5.from(".projects-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, 'm')
    t5.from(".project-card", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    }, 'm')
  }, [])

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="projects" className="projects-container">
        <div className="projects-header">
          <h1>My <span className="highlight">Projects</span></h1>
          <p className="projects-subtitle">Showcasing my work and creativity</p>
        </div>
        <div className="all-projects-box">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => openModal(project)}
            >
              <div className="project-card-inner">
                <div className="project-video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={project.video}
                    className="project-video"
                  ></video>
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <span className="view-details-btn">View Details</span>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-header-info">
                    <span className="project-category">{project.category}</span>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-video-container">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={selectedProject.video}
                  className="modal-video"
                ></video>
              </div>
              <div className="modal-project-info">
                <div className="modal-header">
                  <div>
                    <span className="modal-category">{selectedProject.category}</span>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                  </div>
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link-btn"
                    >
                      <FaExternalLinkAlt /> Visit Project
                    </a>
                  )}
                </div>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-tech-stack">
                  <h4>Technologies Used:</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
