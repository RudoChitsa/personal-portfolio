import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import LinkedinIcon from '../../assets/linkedin.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import CallIcon from '../../assets/call.png';
import EmailIcon from '../../assets/email.png';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_28leixl', 'template_dxd5gxx', form.current, {
            publicKey: '1HiuNMOYEArMfoWAL',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientsDesc'>Ihave had the opportunity to work with companies from across the world.
            Some of the companies I have worked for include;</p>
            <div className='clientImgs'>
                <img src={Walmart} alt='' className='clientImg' />
                <img src={Facebook} alt='' className='clientImg' />
                <img src={Adobe} alt='' className='clientImg' />
                <img src={Microsoft} alt='' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'> Please fill out the form below to discuss work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type='email' className='email' placeholder='Your Email' name='your_email' />
                <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
                <button className='submitBtn' type='submit' value='send'>SEND</button>
                <div className='links'>
                    <img src={WhatsappIcon} alt='' className='link' />
                    <img src={CallIcon} alt='' className='link' />
                    <img src={EmailIcon} alt='' className='link' />
                    <img src={LinkedinIcon} alt='' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
