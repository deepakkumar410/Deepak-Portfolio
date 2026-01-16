import { useState } from 'react'
import Swal from 'sweetalert2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [name, setName] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleFillName = (e) => {
        const { name, value } = e.target;
        setName({ ...name, [name]: value })
    }
    const handlesubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fd0a2499-d4b7-4c39-aaef-4ecfb9511e36");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success !",
                text: "Message Sent successfully !",
                icon: "success"
            });
        }
        setName({
            name: '',
            email: '',
            message: '',
        });
    };

 useGSAP(()=>{
    const t4 = gsap.timeline({
        scrollTrigger: {
            trigger:'.Contact-container',
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 10%",
            scrub: 2,
          }
        });
        t4.from('.container h1',{ 
         y:-50,
         opacity:0,
         duration:1.5,
         stagger:0.3,
         delay:0.5
        },'c')
        t4.from('.form-box',{
         y:100,
         opacity:0,
         duration:1.5,
         stagger:0.3,
         delay:0.5
        },'c')
    });

    return <>
        <section id='contact' className='flex justify-center w-[85%] max-w-[800px] mx-auto min-h-[80vh] pt-[100px] pb-20 relative z-[1] max-[1000px]:flex max-[1000px]:justify-center max-[1000px]:w-full max-[1000px]:mx-auto max-[1000px]:h-[80vh] max-[1000px]:pt-10 max-[768px]:pt-20 max-[768px]:px-[15px] Contact-container'>
            <div className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),rgba(15,23,42,0.96))] backdrop-blur-[12px] p-[50px] rounded-[20px] shadow-[0_20px_60px_rgba(15,23,42,0.8)] w-full border border-[rgba(148,163,184,0.35)] transition-[box-shadow_0.3s,transform_0.3s,border-color_0.3s,background_0.3s] hover:shadow-[0_24px_70px_rgba(15,23,42,0.95)] hover:border-[rgba(56,189,248,0.7)] hover:-translate-y-1 hover:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),rgba(15,23,42,0.98))] max-[768px]:p-[30px] max-[768px]:px-5 max-[1000px]:p-[30px] max-[1000px]:px-5 container">
                <h1 className='text-[55px] font-extrabold mb-5 text-center text-white max-[1000px]:text-[32px] max-[768px]:text-[32px] contact-text'>Contact Me</h1>
                <form onSubmit={handlesubmit} className='form-box'>
                    <label className="block mt-[30px] mb-2 text-white/90 font-semibold text-sm uppercase tracking-[1px]">NAME</label>
                    <input type="text" id="name" name="name" value={name.name} placeholder='Enter your name' required onChange={handleFillName} className="text-white py-[15px] px-[15px] bg-[rgba(55,65,81,0.3)] border border-[rgba(75,85,99,0.3)] rounded-[10px] outline-none w-full text-base transition-all duration-300 focus:border-gray-400 focus:bg-[rgba(55,65,81,0.5)] focus:shadow-[0_0_20px_rgba(0,0,0,0.3)] focus:-translate-y-0.5 placeholder:text-white/40" />
                    <label className="block mt-[30px] mb-2 text-white/90 font-semibold text-sm uppercase tracking-[1px]">E-MAIL</label>
                    <input type="email" id="email" name="email" value={name.email} placeholder='Enter your email' required onChange={handleFillName} className="text-white py-[15px] px-[15px] bg-[rgba(55,65,81,0.3)] border border-[rgba(75,85,99,0.3)] rounded-[10px] outline-none w-full text-base transition-all duration-300 focus:border-gray-400 focus:bg-[rgba(55,65,81,0.5)] focus:shadow-[0_0_20px_rgba(0,0,0,0.3)] focus:-translate-y-0.5 placeholder:text-white/40 max-[1000px]:w-full max-[1000px]:max-w-[20rem]" />
                    <label className="block mt-[30px] mb-2 text-white/90 font-semibold text-sm uppercase tracking-[1px]">Message</label>
                    <textarea 
                        id="message" 
                        name="Message" 
                        value={name.message} 
                        placeholder='Enter your message' 
                        required 
                        onChange={handleFillName}
                        rows="5"
                        className="text-white py-[15px] px-[15px] bg-[rgba(55,65,81,0.3)] border border-[rgba(75,85,99,0.3)] rounded-[10px] outline-none w-full text-base transition-all duration-300 resize-y font-inherit min-h-[120px] focus:border-gray-400 focus:bg-[rgba(55,65,81,0.5)] focus:shadow-[0_0_20px_rgba(0,0,0,0.3)] focus:-translate-y-0.5 placeholder:text-white/40 max-[1000px]:w-full max-[1000px]:max-w-[20rem] message-textarea"
                    />
                    <div className='mt-[35px] flex justify-center max-[1000px]:flex max-[1000px]:justify-center max-[1000px]:pt-2.5 submit-btn'><button type="submit" className="text-white bg-gradient-to-br from-gray-600 to-gray-700 text-[17px] font-semibold py-4 px-[50px] border-none rounded-[30px] cursor-pointer transition-all duration-[0.4s] shadow-[0_10px_30px_rgba(75,85,99,0.3)] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/20 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-[width_0.6s,height_0.6s] hover:before:w-[300px] hover:before:h-[300px] hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] active:-translate-y-0.5 active:scale-[1.02] max-[1000px]:py-[13px] max-[1000px]:px-[25px] max-[1000px]:text-[17px]">Send Now</button></div>
                </form>
            </div>
        </section>
    </>

}

export default Contact
