import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "../Css/Contact.css"
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
        <section id='contact' className='Contact-container'>
            <div className="container">
                <h1 className='contact-text'>Contact Me</h1>
                <form onSubmit={handlesubmit} className='form-box'>
                    <label>NAME</label>
                    <input type="text" id="name" name="name" value={name.name} placeholder='Enter your name' required onChange={handleFillName} />
                    <label >E-MAIL</label>
                    <input type="email" id="email" name="email" value={name.email} placeholder='Enter your email' required onChange={handleFillName} />
                    <label>Message</label>
                    <input type="text" id="message" name="Message" value={name.message} placeholder='Enter  your message' required onChange={handleFillName} />
                    <div className='submit-btn'><button type="submit">Send Now</button></div>
                </form>
            </div>
        </section>
    </>

}

export default Contact