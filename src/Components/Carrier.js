import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import "../Styles/Contact.css";
export default function () {
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
    <div className="Main-email">
      <div className="emailjs">
        <div id="EM" className="Email shadow-2xl">
          <form ref={form} onSubmit={sendEmail}>
            <p>Your Name *</p>
            <input type="text" name="user_name" /> <br />
            <p>Your Email *</p>
            <input type="Email" name="user_email" />
            <br />
            <p>Educatiom *</p>
            <input name="message" /> <br />
            <p>Phone *</p>
            <input name="message" type="number" /> <br />
            <p>Land price *</p>
            <input name="message" type="number"/> <br />
            <p>Adress *</p>
            <input name="message" /> <br />
            <p>About you *</p>
            <textarea name="message"  /> <br />
            <Button variant="contained" id="send" type="submit" value="Send">
              Send
            </Button>
          </form>
        </div>
      </div>
      <div className="Intro-email">
        <p>
          Silver Developers Ltd.
          <br />
          has become a trusted name in the real estate sector in Bangladesh.
          From its very inception, the company has won the confidence and
          goodwill of its client’s achieving & satisfaction. Within a short span
          of time, Silver Developers Ltd. has grown into a renowned and
          dependable <br />
          organization, building elegant, aesthetically pleasing structures that
          grace Cumilla’s finest neighborhoods. Silver Developers Ltd. uses
          high-quality building materials and finishing products to ensure
          durability and customer satisfaction It’s main concentration has been
          in the prime, attractive locations of Cumilla city, the emphasis being
          on sound construction and aesthetic design. Additionally the Company
          has tried to provide accommodations suitable for small families while
          creating scope for the development of residential lands in the
          vicinity of the city. Efforts are underway to cater to the needs of
          clients in every market segment. The success of such a large
          construction company requires specialized labor and highly qualified
          professional backup and it has developed a strong experienced
          competent team of such highly-skilled professionals to work under its
          management.
        </p>
      </div>
    </div>
  );
}
