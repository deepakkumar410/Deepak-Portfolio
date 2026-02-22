import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {FaExternalLinkAlt,  FaTimes, FaBolt,  } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiExpress, SiJavascript, SiHtml5, SiCss3, SiStripe, SiGooglecloud, SiVercel, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaWandMagicSparkles } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const getTechIcon = (tech) => {
  const iconProps = { className: "text-lg" };
  const techMap = {
    "React": <SiReact {...iconProps} className="text-cyan-400" />,
    "Node.js": <SiNodedotjs {...iconProps} className="text-green-500" />,
    "Express.js": <SiExpress {...iconProps} className="text-white" />,
    "MongoDB": <SiMongodb  {...iconProps} className="text-green-600" />,
    "JavaScript": <SiJavascript {...iconProps} className="text-yellow-400" />,
    "HTML": <SiHtml5 {...iconProps} className="text-orange-500" />,
    "CSS": <SiCss3 {...iconProps} className="text-blue-500" />,
    "GSAP": <FaBolt {...iconProps} className="text-teal-400" />,
    "Stripe": <SiStripe {...iconProps} className="text-purple-500" />,
    "Google OAuth": <SiGooglecloud {...iconProps} className="text-blue-400" />,
    "Context API": <SiReact {...iconProps} className="text-cyan-400" />,
    "Framer Motion": <FaWandMagicSparkles {...iconProps} className="text-pink-400" />,
    "Admin Panel": <TbApi {...iconProps} className="text-indigo-400" />,
    "Multer": <TbApi {...iconProps} className="text-amber-400" />,
    "Vercel": <SiVercel {...iconProps} className="text-white" />,
  };
  return techMap[tech] || <span>{tech}</span>;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedDescription, setExpandedDescription] = useState(false);

  const projects = [
    {
      id: 7,
      title: "D-Cart E-Commerce Platform",
      description: "Enterprise-level e-commerce platform with One Admin managing multiple customers and vendors. Admin controls product listings, user management, and orders. Multiple users (customers) can browse, purchase, and track orders. Google OAuth authentication, role-based access control, Stripe payments, and Framer Motion animations.",
      fullDescription: "A comprehensive full-stack e-commerce solution with dedicated Admin System and multiple Customer Users. One Admin user has complete control via Advanced Admin Dashboard - managing all products, users, orders, inventory, and analytics. Multiple Customer Users can register via Google OAuth, browse products, add items to cart/wishlist, make secure Stripe payments, and track their orders. Admin Dashboard includes user management, product management, order tracking, inventory control, and detailed analytics. Each customer has their own profile, order history, and preferences. Built with React and Context API for dynamic frontend UI, Node.js and Express.js backend, MongoDB database. Supports product uploads by vendors when enabled by Admin. Smooth Framer Motion animations, fully responsive design for all devices, and enterprise-level security and scalability.",
      features: [
        "One Admin User with Full Control",
        "Multiple Customer Users Registration",
        "Google OAuth Authentication System",
        "Admin Dashboard for Complete Control",
        "Role-Based Access (Admin vs Customer)",
        "User Management Panel for Admin",
        "Product Management & Inventory by Admin",
        "Multiple Customers Can Browse Products",
        "Shopping Cart & Wishlist Functionality",
        "Order Management & Customer Tracking",
        "Customer Profile & Order History",
        "Secure Stripe Payment Processing",
        "Customer Support Analytics",
        "File Upload with Multer Middleware",
        "Smooth Framer Motion Animations",
        "Fully Responsive Design"
      ],
      video: "/E-Commerce Websites - Made with Clipchamp.mp4",
      link: "https://d-cart-e-commerce.netlify.app/",
      technologies: ["React", "Context API", "Framer Motion", "MongoDB", "Node.js", "Express.js", "Multer", "Stripe", "Google OAuth", "Admin Panel"],
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Animate-X (GSAP Animation Website)",
      description: "A fully responsive animation website built using React and GSAP. Features smooth motion effects, scroll-based animations, and modern transitions. Focused on delivering a visually rich experience with optimized performance and Vercel deployment.",
      video: "/Animation webbb - Made with Clipchamp.mp4",
      link: "https://animate-x-animation.vercel.app/",
      technologies: ["React", "GSAP", "Vercel"],
      category: "Frontend"
    },

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
    // {
    //   id: 5,
    //   title: "Student Registration Form",
    //   description: "Create a student registration form using React.js, Node.js, Express.js, and MongoDB. When a user submits the data, it will be stored in the database. Additionally, include a delete button that removes the data from the database.",
    //   video: "/Student  Registration Form.mp4",
    //   link: "https://delicate-pavlova-cc8858.netlify.app/",
    //   technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    //   category: "Full Stack"
    // },

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
    document.body.style.overflow = 'hidden';  // <-- scroll disable
  };

  const closeModal = () => {
    setSelectedProject(null);
  setExpandedDescription(false);

  }

  return (
    <>
      <section id="projects" className="w-[90%] max-w-[1400px] mx-auto pb-[100px] pt-[150px] relative z-[1] max-[1000px]:w-full max-[1000px]:pt-[100px] max-[1000px]:px-5 max-[768px]:pt-20 max-[768px]:px-[15px] projects-container">
        <div className="text-center mb-20 max-[768px]:mb-10 projects-header">
          <h1 className="text-[55px] font-extrabold mb-[15px] text-white max-[1000px]:text-[40px] max-[768px]:text-[32px] max-[600px]:text-[32px]">My <span className="text-gray-300 highlight">Projects</span></h1>
          <p className="text-lg text-white/70 font-light max-[1000px]:text-base projects-subtitle">Showcasing my work and creativity</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 w-full py-5 max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-[25px] all-projects-box">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-[0.4s] rounded-[20px] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] border border-[rgba(148,163,184,0.35)] opacity-100 visible max-[1000px]:opacity-100 max-[1000px]:visible hover:-translate-y-2.5 hover:shadow-[0_24px_70px_rgb(2,24,77)] hover:border-[rgba(56,189,248,0.7)] project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => openModal(project)}
            >
              <div className="flex flex-col h-full project-card-inner">
                <div className="relative w-full h-[280px] overflow-hidden bg-black max-[1000px]:h-[250px] max-[768px]:h-[200px] max-[600px]:h-[220px] project-video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={project.video}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 project-video"
                  ></video>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 project-overlay">
                    <div className="project-overlay-content">
                      <span className="py-3 px-[30px] bg-gray-600 text-white rounded-[30px] font-semibold text-base shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-y-5 transition-transform duration-300 group-hover:translate-y-0 view-details-btn">View Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-[25px] flex flex-col gap-4 max-[1000px]:p-5 project-info">
                  <div className="flex justify-between items-center project-header-info">
                    <span className="py-1.5 px-4 bg-[rgba(55,65,81,0.3)] text-gray-400 rounded-[20px] text-xs font-semibold uppercase tracking-[1px] project-category">{project.category}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-lg transition-all duration-300 p-2 rounded-full flex items-center justify-center hover:bg-[rgba(55,65,81,0.4)] hover:rotate-45 hover:scale-110 project-link-icon"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <h3 className="text-[22px] font-bold text-white m-0 leading-[1.3] max-[1000px]:text-xl project-title">{project.title}</h3>
                  <p className="text-white/70 text-[15px] leading-[1.6] m-0 max-[1000px]:text-sm project-description">
                    {project.description.length > 150 
                      ? project.description.substring(0, 150) + "..." 
                      : project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                        setExpandedDescription(false);
                      }}
                      className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors cursor-pointer self-start"
                    >
                      See More →
                    </button>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2.5 project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="py-1.5 px-3 bg-[rgba(75,85,99,0.1)] text-gray-400 rounded-[15px] text-xs font-medium border border-[rgba(75,85,99,0.2)] tech-tag flex items-center gap-1.5">
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-[10px] z-[1000] flex items-center justify-center p-5 animate-fadeIn project-modal" onClick={closeModal}>
            <div className="bg-gradient-to-br from-[rgba(25,29,32,0.95)] to-[rgba(15,20,25,0.95)] rounded-[25px] max-w-[1000px] w-full max-h-[95vh] relative border border-[rgba(107,114,128,0.3)] shadow-[0_20px_80px_rgba(75,85,99,0.3)] animate-slideUp max-[1000px]:max-h-[95vh] project-modal-content overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-5 right-5 bg-[rgba(55,65,81,0.4)] border border-[rgba(107,114,128,0.3)] text-gray-400 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-xl z-10 transition-all duration-300 hover:bg-[rgba(75,85,99,0.3)] hover:rotate-90 hover:scale-110 modal-close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="w-full h-[400px] bg-black rounded-t-[25px] overflow-hidden max-[1000px]:h-[250px] modal-video-container">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={selectedProject.video}
                  className="w-full h-full object-cover modal-video"
                ></video>
              </div>
              <div className="p-[35px] max-[1000px]:p-[25px] modal-project-info">
                <div className="flex justify-between items-start mb-5 gap-5 max-[1000px]:flex-col modal-header">
                  <div>
                    <span className="py-1.5 px-4 bg-[rgba(55,65,81,0.3)] text-gray-400 rounded-[20px] text-xs font-semibold uppercase tracking-[1px] inline-block mb-2.5 modal-category">{selectedProject.category}</span>
                    <h2 className="text-[32px] font-bold text-white m-0 leading-[1.2] max-[1000px]:text-2xl modal-title">{selectedProject.title}</h2>
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-3 px-[25px] bg-gray-600 text-white no-underline rounded-[25px] font-semibold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-[1000px]:w-full max-[1000px]:justify-center modal-link-btn"
                    >
                      <FaExternalLinkAlt /> Visit Project
                    </a>
                  )}
                </div>
                <p className="text-white/80 text-[17px] leading-[1.8] mb-[30px] modal-description">
                  {expandedDescription && selectedProject.fullDescription ? selectedProject.fullDescription : selectedProject.description}
                </p>
                {selectedProject.fullDescription && (
                  <button
                    onClick={() => setExpandedDescription(!expandedDescription)}
                    className="text-cyan-400 text-sm font-semibold mb-6 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {expandedDescription ? "Show Less" : "See More"}
                  </button>
                )}
                {expandedDescription && selectedProject.features && (
                  <div className="mb-8 p-6 bg-[rgba(56,189,248,0.05)] rounded-[15px] border border-[rgba(56,189,248,0.2)]">
                    <h4 className="text-white text-lg mb-4 font-semibold">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/75 text-sm">
                          <span className="text-cyan-400 font-bold text-lg mt-[-4px]">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="modal-tech-stack">
                  <h4 className="text-white text-lg mb-4 font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2.5 modal-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="py-2 px-[18px] bg-[rgba(55,65,81,0.3)] text-gray-400 rounded-[20px] text-sm font-semibold border border-[rgba(107,114,128,0.3)] modal-tech-tag flex items-center gap-2">
                        {getTechIcon(tech)}
                        {tech}
                      </span>
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
