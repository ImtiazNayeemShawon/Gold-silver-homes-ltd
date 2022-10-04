import React from "react";
import "../Styles/Gallary.css";
import One from "../Assets/one.jpg";
import Two from "../Assets/2.jpg";
import Three from "../Assets/6.jpg";
import Four from "../Assets/4.jpg";
import Five from "../Assets/5.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Gallary() {
  return (
    <div>
      <h1>Our Gallary </h1>
      <div data-aos="fade-up" className="Gallary-content">
        <div className="Gallary">
          <h1>Thakur para project</h1>
          <img src={One} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Nanua dighi project</h1>
          <img src={Two} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Ranir Dighi project</h1>
          <img src={Three} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Tal pukur  par project</h1>
          <img src={Four} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Thakur para project</h1>
          <img src={Five} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Kandirpar project</h1>
          <img src={Three} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Saktola project</h1>
          <img src={Four} alt="one" />
        </div>
        <div data-aos="fade-up" className="Gallary">
          <h1>Tomchom bridge project</h1>
          <img src={Five} alt="one" />
        </div>
      </div>
    </div>
  );
}
