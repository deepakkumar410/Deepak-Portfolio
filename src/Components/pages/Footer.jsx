import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { BiLogoFacebook } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer style={{
      textAlign: "center", 
      marginBottom: "30px", 
      padding: "40px 20px",
      borderTop: "1px solid rgba(42, 170, 248, 0.1)",
      marginTop: "80px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px"
      }}>
        <a 
          href="https://www.facebook.com/share/1F7YqfrqAP/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: "#2aaaf8",
            fontSize: "20px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.2)";
            e.target.style.color = "#3bb9ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.color = "#2aaaf8";
          }}
        >
          <BiLogoFacebook />
        </a>
        <a 
          href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: "#2aaaf8",
            fontSize: "20px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.2)";
            e.target.style.color = "#3bb9ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.color = "#2aaaf8";
          }}
        >
          <GrInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/deepak-kumar-799a22328/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: "#2aaaf8",
            fontSize: "20px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.2)";
            e.target.style.color = "#3bb9ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.color = "#2aaaf8";
          }}
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/deepakkumar410" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: "#2aaaf8",
            fontSize: "20px",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.2)";
            e.target.style.color = "#3bb9ff";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.color = "#2aaaf8";
          }}
        >
          <FaGithub />
        </a>
      </div>
      <p style={{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "14px"
      }}>
        &copy; {new Date().getFullYear()} Deepak Kumar | All rights reserved
      </p>
      <p style={{
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: "12px",
        marginTop: "10px"
      }}>
        Built with React & GSAP
      </p>
    </footer>
  )
}

export default Footer