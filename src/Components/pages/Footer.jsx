import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BiLogoFacebook } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="text-center my-20 mx-auto py-10 px-5 border-t border-[rgba(75,85,99,0.2)] relative z-[1] text-white/90">
      <div className="flex justify-center gap-5 mb-5 footer-socials">
        <a 
          href="https://www.facebook.com/share/1F7YqfrqAP/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 text-xl transition-all duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,color] hover:-translate-y-1.5 hover:scale-[1.2] hover:text-gray-300"
        >
          <BiLogoFacebook />
        </a>
        <a 
          href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 text-xl transition-all duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,color] hover:-translate-y-1.5 hover:scale-[1.2] hover:text-gray-300"
        >
          <GrInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/deepak-kumar-799a22328/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 text-xl transition-all duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,color] hover:-translate-y-1.5 hover:scale-[1.2] hover:text-gray-300"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/deepakkumar410" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 text-xl transition-all duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,color] hover:-translate-y-1.5 hover:scale-[1.2] hover:text-gray-300"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-white/60 text-sm footer-text">
        &copy; {new Date().getFullYear()} Deepak Kumar | All rights reserved
      </p>
      <p className="text-white/40 text-xs mt-2.5 footer-subtext">
        Built with React & GSAP
      </p>
    </footer>
  );
}

export default Footer;
