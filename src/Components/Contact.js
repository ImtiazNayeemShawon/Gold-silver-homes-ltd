import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from '@mui/system';
import '../Styles/Contact.css'
export default function() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g14ykod', 'template_a7kg815', form.current, 'b6bZQygonipHSRs21')
      .then((result) => {
        window.alert(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <Container className="emailjs">
    <div id='EM' className='Email shadow-2xl'>
      <h1>Send e-mail</h1>
      <h6>Get your all information by email</h6>
    <form ref={form} onSubmit={sendEmail}>
      <p>Your Name</p>
      <input type="text" name="user_name" /> <br/>
      <p>Your Email</p>
      <input type="email" name="user_email" /><br/>
      <p>Message</p>
      <textarea name="message" /> <br/>
      <input  id='send' type="submit" value="Send"  />
    </form>
    </div>
    </Container>
  );
};