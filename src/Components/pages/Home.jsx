import { BiLogoFacebook } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

gsap.registerPlugin(useGSAP);
const Home = () => {

  const [text] = useTypewriter({
    words: ['Deepak Kumar', 'Web Developer'],
    loop: true,
    typeSpeed: 80,      // typing smooth
    deleteSpeed: 50,    // deleting smooth
    delaySpeed: 1500,   // pause between words
  });



 useGSAP(() => {
  gsap.set(".dpk-img", {
    opacity: 1,
    scale: 1,
    visibility: "visible",
  });

  const tl = gsap.timeline({
    delay: 0.5, // ⏳ small wait before animation starts
  });

  // common label
  tl.add("start");

  tl.from(".my-info h1", {
    y: 60,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
  }, "start")

  .from(".info-para", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  }, "start+=0.2")

  .from(".icon", {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15, // smooth stagger
    ease: "back.out(1.4)",
  }, "start+=0.35")

  .from(".dpk-img", {
    opacity: 0,
    scale: 0.8,
    duration: 1.8,
    ease: "power4.out",
  }, "start+=0.25");

}, { once: true });

  return (
    <>
      <section id="home" className="w-full mt-[30px] flex gap-2.5 items-center relative z-[1] overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-1/5 before:w-[600px] before:h-[600px] before:bg-[radial-gradient(circle,rgba(75,85,99,0.05)_0%,transparent_70%)] before:rounded-full before:animate-float before:z-0 after:content-[''] after:absolute after:-bottom-[30%] after:-left-[10%] after:w-[500px] after:h-[500px] after:bg-[radial-gradient(circle,rgba(75,85,99,0.08)_0%,transparent_70%)] after:rounded-full after:animate-float-reverse after:z-0 max-[1000px]:mt-0 max-[1000px]:w-full max-[1000px]:h-[740px] max-[1000px]:flex-col-reverse max-[1000px]:items-center max-[1000px]:p-5 max-[768px]:p-2.5 max-[1000px]:before:hidden max-[1000px]:after:hidden">
        <div className="w-[60%] relative z-[1] max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:z-[1]">
          <div className="mt-[60px] ml-10 p-2.5 px-10 max-[1000px]:p-0 max-[1000px]:px-5 max-[1000px]:my-5 max-[1000px]:text-center">
            <h1 className="text-[55px] font-bold leading-tight mb-5 text-white max-[1000px]:text-[32px] max-[768px]:text-[28px]">Hi!</h1>
            <h1 className="text-[55px] font-bold leading-tight mb-5 text-white max-[1000px]:text-[32px] max-[768px]:text-[28px]">
              I am <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-cyan-400 bg-[length:600%_600%] bg-clip-text text-transparent animate-gradientText no-gsap">{text}</span>

              <span className="text-purple-400 animate-blink">
                <Cursor cursorBlinking />
              </span>

            </h1>

            <p className="text-xl leading-[38px] py-[30px] text-white/85 max-w-[90%] max-[1000px]:text-base max-[1000px]:py-5 max-[1000px]:px-2.5 max-[1000px]:text-center max-[1000px]:max-w-full max-[768px]:text-sm info-para">
              I am a MERN stack developer with a strong understanding of web development using MongoDB, Express.js, React.js and Node.js. I focus on building user-friendly, performant web applications and APIs.
            </p>
          </div>
          <div className="pl-20 flex gap-[30px] max-[1000px]:pl-0 max-[1000px]:justify-center max-[1000px]:flex-wrap max-[1000px]:gap-5 link-icon">
            <div className="relative icon facebook">
              <a href="https://www.facebook.com/share/1F7YqfrqAP/" target="_blank" className="flex items-center justify-center w-[50px] h-[50px] border-2 border-gray-500 text-2xl text-gray-400 rounded-full cursor-pointer transition-all duration-[0.4s] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.4s_ease,height_0.4s_ease] before:z-0 hover:before:w-full hover:before:h-full hover:-translate-y-1 hover:scale-[1.15] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-transparent">
                <BiLogoFacebook className="relative z-[1] transition-[transform_0.4s_ease,color_0.3s_ease] hover:rotate-[360deg] hover:scale-110 hover:text-white" />
              </a>
            </div>

            <div className="relative icon instagram">
              <a href="https://www.instagram.com/deepak_rai_04_/?__pwa=1" target="_blank" className="flex items-center justify-center w-[50px] h-[50px] border-2 border-gray-500 text-2xl text-gray-400 rounded-full cursor-pointer transition-all duration-[0.4s] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.4s_ease,height_0.4s_ease] before:z-0 hover:before:w-full hover:before:h-full hover:-translate-y-1 hover:scale-[1.15] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-transparent before:bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
                <GrInstagram className="relative z-[1] transition-[transform_0.4s_ease,color_0.3s_ease] hover:rotate-[360deg] hover:scale-110 hover:text-white" />
              </a>
            </div>

            <div className="relative icon linkedin">
              <a href="https://www.linkedin.com/in/deepak-kumar-799a22328/" target="_blank" className="flex items-center justify-center w-[50px] h-[50px] border-2 border-gray-500 text-2xl text-gray-400 rounded-full cursor-pointer transition-all duration-[0.4s] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.4s_ease,height_0.4s_ease] before:z-0 hover:before:w-full hover:before:h-full hover:-translate-y-1 hover:scale-[1.15] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-transparent before:bg-[#0a66c2]">
                <FaLinkedinIn className="relative z-[1] transition-[transform_0.4s_ease,color_0.3s_ease] hover:rotate-[360deg] hover:scale-110 hover:text-white" />
              </a>
            </div>

            <div className="relative icon github">
              <a href="https://github.com/deepakkumar410" target="_blank" className="flex items-center justify-center w-[50px] h-[50px] border-2 border-gray-500 text-2xl text-gray-400 rounded-full cursor-pointer transition-all duration-[0.4s] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.4s_ease,height_0.4s_ease] before:z-0 hover:before:w-full hover:before:h-full hover:-translate-y-1 hover:scale-[1.15] hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-transparent before:bg-[#171515]">
                <FaGithub className="relative z-[1] transition-[transform_0.4s_ease,color_0.3s_ease] hover:rotate-[360deg] hover:scale-110 hover:text-white" />
              </a>
            </div>

          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative z-[1] max-[1000px]:w-full max-[1000px]:flex max-[1000px]:justify-center right-side">
          <div className="mt-[50px] w-[450px] h-[450px] rounded-full  shadow-[0_0_30px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center relative animate-floatImage transition-all duration-500 opacity-100 visible max-[1000px]:my-5 max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[768px]:w-[200px] max-[768px]:h-[200px] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] dpk-img">
            <img
              src="/journalist-digital-avatar-generative-ai_934475-9380-removebg-preview.png"
              alt="Deepak Kumar"
              className="rounded-full h-[500] w-[500] object-cover relative z-[1] block opacity-100 visible max-[1000px]:h-[240px] max-[1000px]:w-[240px] max-[768px]:h-[190px] max-[768px]:w-[190px]"
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.style.display = "none";
              }}
              onLoad={() => {
                console.log("Image loaded successfully");
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
//
export default Home;
