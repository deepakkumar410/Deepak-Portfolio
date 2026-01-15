import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BiLogoFacebook } from 'react-icons/bi';
import '../Css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a 
          href="https://www.facebook.com/share/1F7YqfrqAP/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <BiLogoFacebook />
        </a>
        <a 
          href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/deepak-kumar-799a22328/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/deepakkumar410" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <p className="footer-text">
        &copy; {new Date().getFullYear()} Deepak Kumar | All rights reserved
      </p>
      <p className="footer-subtext">
        Built with React & GSAP
      </p>
    </footer>
  );
}

export default Footer;
