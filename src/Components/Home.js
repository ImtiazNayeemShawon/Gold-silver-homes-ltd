import React from "react";
import "../Styles/Home.css";
import Rahman from "../Assets/Rahman.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

//const Count1 = <CountUp end={20} duration={5} />;
//const Count2 = <CountUp end={10} duration={5} />;
//const Count3 = <CountUp end={50} duration={5} />;

const images1 = [
  {
    url: " https://silverdevelopersltd.com/wp-content/uploads/2022/07/Anower-Lodge-Preview.jpg",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Mojumder_Pview-1.jpg",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Hoque-Tower-Preview.png",
  },
];

const images2 = [
  {
    url: " https://silverdevelopersltd.com/wp-content/uploads/2022/08/White-House-Preview.png",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Ali-Manssion-Preview.jpg",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Angle-Park-Preview.png",
  },
];

const images3 = [
  {
    url: " https://silverdevelopersltd.com/wp-content/uploads/2022/08/Mozumder-Market-Preview.png",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/07/Fatema-Palace-Preview.jpg",
  },
  {
    url: "https://silverdevelopersltd.com/wp-content/uploads/2022/08/Fatema-Nir-Preview.png",
  },
];

export default function Home() {
  return (
    <div>
      <div
        className="Container "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80")`,
          backgroundSize: "cover",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <div className="Intro-text">
          <h1>In the mindset of exclusivity</h1>
          <p>
            Searching for the perfect place to live on? Well, look no further,
            as bdHousing is here with everything you have been looking for with
            the largest real estate marketing portal in Bangladesh.
          </p>
        </div>
        <div className="Intro-img"></div>
      </div>
      <div className="slide-container">
        <div className="Running">
          <h1>Running projects</h1>
          <div>
            <SimpleImageSlider
              width={300}
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
              width={300}
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
              width={300}
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
