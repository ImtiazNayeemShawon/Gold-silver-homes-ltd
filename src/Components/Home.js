import React from "react";
import "../Styles/Home.css";
import CountUp from "react-countup";
import Rahman from "../Assets/Rahman.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Count1 = <CountUp end={20} duration={5} />;
const Count2 = <CountUp end={10} duration={5} />;
const Count3 = <CountUp end={50} duration={5} />;

const images1 = [
  { url: " https://silverdevelopersltd.com/wp-content/uploads/2022/07/Anower-Lodge-Preview.jpg" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Mojumder_Pview-1.jpg" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Hoque-Tower-Preview.png" },
  
];


const images2 = [
  { url: " https://silverdevelopersltd.com/wp-content/uploads/2022/08/White-House-Preview.png" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Ali-Manssion-Preview.jpg" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Angle-Park-Preview.png" },
  
];


const images3 = [
  { url: " https://silverdevelopersltd.com/wp-content/uploads/2022/08/Mozumder-Market-Preview.png" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Fatema-Palace-Preview.jpg" },
  { url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Fatema-Nir-Preview.png" },
  
];

export default function Home() {
  return (
    <div>
      <div className="Container">
        <div className="Intro-text">
          <h1>Discover Most suitable homes</h1>
          <p>
            Find a variety of properties that suit you very easily
            <br /> forget all difficulties in finding a resdence for you
          </p>
          <div className="Counter-div">
            <div className="Count">
              {" "}
              <span>
                {Count1}K+ <h6>Products </h6>{" "}
              </span>
            </div>
            <div className="Count shadow-2xl">
              <span>
                {Count2}K+ <h6>Happy coustomer </h6>
              </span>
            </div>
            <div className="Count">
              <span>
                {Count3}K+ <h6>Homes</h6>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="Intro-img">
          <img src={Rahman} alt="Rahman villa" />
        </div>
      </div>
      <div className="slide-container">
        <div className="Running">
          <h1>Running projects</h1>
          <div>
            <SimpleImageSlider
              width={400}
              height={400}
              images={images1}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>
        <div className="Upcoming">
          <h1>Upcoming projects</h1>
          <div>
            <SimpleImageSlider
              width={400}
              height={400}
              images={images2}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>
        <div className="Complete">
          <h1>Complete projects</h1>
          <div>
            <SimpleImageSlider
              width={400}
              height={400}
              images={images3}
              showBullets={false}
              showNavs={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
