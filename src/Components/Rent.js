import React, { useRef } from "react";
import "../Styles/Rent.css";
import Rent1 from "./Rent1";
import Rent2 from "./Rent2";
import Rent3 from "./Rent3";
import Rent4 from "./Rent4";
import Rent5 from "./Rent5";
import Rent6 from "./Rent6";
import Rent7 from "./Rent7";
import Rent8 from "./Rent8";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import "../Styles/Contact.css";
export default function Rent() {
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
    <div className="Rent">
      <div className="Show-side">
        <Rent1 />
        <Rent2 />
        <Rent3 />
        <Rent4 />
        <Rent5 />
        <Rent6 />
        <Rent7 />
        <Rent8 />
      </div>
      <div className="Search-side">
        <div className="Main-email">
          <div className="emailjs">
            <div id="EM" className="Email shadow-2xl">
              <form ref={form} onSubmit={sendEmail}>
                <p>Your Name *</p>
                <input type="text" name="user_name" /> <br />
                <p>Your Email *</p>
                <input type="Email" name="user_email" />
                <br />
                <p>Home size *</p>
                <input name="message" /> <br />
                <p>Home Details *</p>
                <input name="message" /> <br />
                <p>Home price *</p>
                <input name="message" type="number" /> <br />
                <p>Home location *</p>
                <input name="message" /> <br />
                <Button
                  variant="contained"
                  id="send"
                  type="submit"
                  value="Send"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
