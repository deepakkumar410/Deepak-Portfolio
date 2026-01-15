import "../Css/Experience.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "DEEPNAP SOFTECH",
      position: "Frontend Developer",
      location: "Faridabad, India",
      duration: "April 2025 - Present",
      description: "Developed a fully responsive web application with custom UI components, implementing front-end logic to handle dynamic workflows and optimizing performance for a seamless user experience.",
      projects: [
        {
          name: "Ticket Management System",
          technologies: ["React", "Tailwind CSS", "RTK Query"],
          points: [
            "Developed a fully responsive system using React, Tailwind CSS, and RTK Query",
            "Implemented workflows for task handling, ticket updates, scheduling, and real-time UI refresh",
            "Created reusable components (tables, forms, modals) improving frontend speed & maintainability",
            "Optimized performance by reducing re-renders and restructuring components for faster load time",
            "Integrated secure API communication and automatic caching"
          ]
        },
        {
          name: "B2B Production Automation",
          technologies: ["React", "RTK Query", "Node.js"],
          points: [
            "Built frontend features for inventory tracking, production scheduling, and order management",
            "Implemented complex business logic for role-based dashboards (Admin, Manager, Staff)",
            "Integrated backend APIs using RTK Query for real-time data consistency and smooth workflows",
            "Designed responsive dashboard layouts improving efficiency for business users"
          ]
        }
      ]
    }
  ];

  
  useGSAP(() => {
    // Ensure content is visible by default
    gsap.set([".experience-card", ".project-card"], {
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
    .from(".project-card", {
      y: 25,
      opacity: 0.8,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.15")
  }, []);

  return (
    <>
      <section id="experience" className="experience-container">
        <div className="experience-header">
          <h1>My <span className="highlight">Experience</span></h1>
          <p className="experience-subtitle">Professional journey and personal projects</p>
        </div>

        <div className="experiences-wrapper">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header-card">
                <div className="company-info">
                  <div className="company-icon">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h2 className="company-name">{exp.company}</h2>
                    <h3 className="position-name">{exp.position}</h3>
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              
              <div className="projects-list">
                {exp.projects.map((project, idx) => (
                  <div key={idx} className="project-item">
                    <div className="project-header">
                      <FaCode className="project-icon" />
                      <h4 className="project-name">{project.name}</h4>
                    </div>
                    <div className="project-tech-tags">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <ul className="project-points">
                      {project.points.map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

