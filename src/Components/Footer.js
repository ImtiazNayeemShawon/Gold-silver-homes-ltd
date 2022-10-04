import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="About">
          <h1>About us</h1>
          <p>
            Gold Silver homes Ltd. a fast growing real estate company commenced
            its journey in 2011; since then it has emerged as one of the most
            flourishing real estate developers in the country. Silver Developers
            Ltd. dedication to the work by the skilled employees. Silver
            Developers Ltd. is the most trusted brand in the real estate sector
            of Bangladesh. Silver Developers Ltd. group serving the nation and
            fulfilling lots of people’s dream and hopes by building high quality
            residential and commercial establishments.
          </p>
        </div>
        <div className="Contact">
          <h1>Contact</h1>
          <ul>
            <li>Phone:+8801713-026500</li>
            <li>Email:silverdevelopersltd@gmail.com</li>
            <li>tel:9995588</li>
            <li>Adress:Silver Dream- Ground Floor, 208 Shahid Samsul Haq Sarak, Jhawtala, Cumilla.</li>
            <Link to="Contact">Contact</Link>
          </ul>
        </div>

        <div className="News">
          <h1>News</h1>
          <p>
            Gold Silver homes Ltd. a fast growing real estate company commenced
            its journey in 2011; since then it has emerged as one of the most
            flourishing real estate developers in the country. Silver Developers
            Ltd. dedication to the work by the skilled employees. Silver
            Developers Ltd. is the most trusted brand in the real estate sector
            of Bangladesh. Silver Developers Ltd. group serving the nation and
            fulfilling lots of peoples dream and hopes by building high quality
            residential and commercial establishments.
          </p>
        </div>
      </div>
    </div>
  );
}
