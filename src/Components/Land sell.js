import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@mui/system";
import "../Styles/Land.css";

export default function Land() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g14ykod",
        "template_a7kg815",
        form.current,
        "b6bZQygonipHSRs21"
      )
      .then(
        (result) => {
          window.alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="emailjs">
      <div id="EM" className="Email-l shadow-2xl">
        <h1>Find home</h1>
        <h6>Find your home by contacting us </h6>
        <form ref={form} onSubmit={sendEmail}>
          <p>1.Your Name 2.Adress</p>
          <input type="text" name="user_name" /> <br />
          <p>Your Email adress</p>
          <input type="email" name="user_email" />
          <br />
          <p>Home details</p>
          <textarea name="message" /> <br />
          <p>Home number:</p>
          <textarea name="massage" /> <br />
          <input id="send-l" type="submit" value="Send" />
        </form>
      </div>
    </Container>
  );
}
