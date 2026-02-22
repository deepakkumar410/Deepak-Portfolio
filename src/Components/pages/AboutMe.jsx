import React from "react";
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

    t1.from(".about-text, .about-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
    }, 'a'),
      t1.from(".about-content", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        delay: 0.5,
      }, 'a'),
      
      t1.from(".download-btn", {
       y:250,
        opacity: 0,
        duration: 1.5,
        delay: 0.8,
      }, 'a')
    })
  return (
    <>
      <section id="about" className="min-h-screen w-full pt-[100px] pb-20 relative z-[1] max-[1000px]:w-full max-[768px]:pt-16 max-[768px]:pb-12 max-[768px]:px-4 about-me-container">
        <div className="text-center max-[1000px]:pt-[30px] about-header mb-6 md:mb-8">
          <h1 className="pt-10 text-[55px] font-extrabold mb-[15px] text-white max-[1000px]:pt-2.5 max-[1000px]:text-[32px] max-[768px]:pt-0 max-[768px]:text-3xl max-[768px]:mb-2 about-text">About Me</h1>
          <p className="text-lg text-white/70 font-light max-[768px]:text-base about-subtitle">Get to know more about me</p>
        </div>
        <div className="w-[85%] max-w-[1000px] mx-auto pt-[60px] max-[1000px]:w-full max-[1000px]:pt-10 max-[768px]:pt-4 max-[768px]:w-full max-[768px]:px-2 all-details">
          <div className="about-content">
            <div className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] rounded-[20px] p-8 mb-6 max-[768px]:p-4 max-[768px]:mb-4">
              <p className="text-[19px] leading-[38px] text-white/85 mb-6 max-[768px]:text-sm max-[768px]:leading-6 max-[768px]:mb-4">
                My name is <span className="text-cyan-400 font-semibold">Deepak Kumar</span>, and I am from Bihar. Currently, I reside in Faridabad. I have successfully completed my <span className="text-purple-400 font-semibold">Bachelor of Computer Applications (BCA)</span> degree from Amity University Online in <span className="text-green-400 font-semibold">February 2025</span>.
              </p>
              <p className="text-[19px] leading-[38px] text-white/85 mb-6 max-[768px]:text-[17px] max-[768px]:leading-[32px]">
                I am a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with around 1 year of professional experience in building scalable web applications. My expertise lies in creating user-friendly, performant interfaces using React.js, Node.js, Express.js, and MongoDB. I have a strong passion for modern web technologies and continuously strive to learn and implement best practices in software development.
              </p>
              <p className="text-[19px] leading-[38px] text-white/85 max-[768px]:text-[17px] max-[768px]:leading-[32px]">
                I specialize in developing reusable UI components, optimizing application performance, and implementing real-time features using modern tools like RTK Query. My goal is to contribute to innovative full-stack teams and deliver exceptional user experiences through clean, efficient code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-[768px]:gap-4 max-[768px]:mb-4">
              <div className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] rounded-[20px] p-6 about-content max-[768px]:p-4">
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Full Name</span>
                    <span className="text-white font-medium">Deepak Kumar</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Date of Birth</span>
                    <span className="text-white font-medium">March 01, 2004</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Location</span>
                    <span className="text-white font-medium">Haryana, Faridabad</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Education</span>
                    <span className="text-white font-medium">BCA ✓ (Completed - Feb 2025)</span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] rounded-[20px] p-6 about-content max-[768px]:p-4">
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Email</span>
                    <a href="mailto:dpk.developer04@gmail.com" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">dpk.developer04@gmail.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Phone</span>
                    <a href="tel:8808994460" className="text-white font-medium hover:text-cyan-400 transition-colors">+91 8808994460</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Experience</span>
                    <span className="text-white font-medium">1 Year | Full Stack Developer</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Availability</span>
                    <span className="text-green-400 font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] rounded-[20px] p-6 about-content max-[768px]:p-4 max-[768px]:mb-4">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700 max-[768px]:text-lg max-[768px]:mb-3">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-[768px]:grid-cols-1">
                <div className="text-center p-4 rounded-[15px] bg-[rgba(75,85,99,0.1)] hover:bg-[rgba(75,85,99,0.15)] transition-all duration-300">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="text-white font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm text-white/70">Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern UI frameworks.</p>
                </div>
                <div className="text-center p-4 rounded-[15px] bg-[rgba(75,85,99,0.1)] hover:bg-[rgba(75,85,99,0.15)] transition-all duration-300">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h4 className="text-white font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-white/70">Creating robust REST APIs and server-side logic using Node.js, Express.js, and MongoDB.</p>
                </div>
                <div className="text-center p-4 rounded-[15px] bg-[rgba(75,85,99,0.1)] hover:bg-[rgba(75,85,99,0.15)] transition-all duration-300">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="text-white font-semibold mb-2">Full Stack Solutions</h4>
                  <p className="text-sm text-white/70">End-to-end development of scalable web applications with optimized performance and modern architecture.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center download-btn max-[768px]:mt-5">
              <a href="/Deepak_Kumar_CV.pdf" target="_blank" download="Deepak_Kumar_CV.pdf" className="cursor-pointer py-4 px-[35px] bg-gray-600 border-none rounded-[30px] transition-all duration-[0.4s] text-[17px] font-semibold no-underline text-white inline-block shadow-[0_10px_30px_rgba(75,85,99,0.3)] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/20 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.6s,height_0.6s] hover:before:w-[300px] hover:before:h-[300px] hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] max-[768px]:py-3 max-[768px]:px-6 max-[768px]:text-base resume-pdf">
                <span className="relative z-[1]">📄 Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
