import React from "react";
import "../Styles/About.css";
import { Container } from "@mui/material";
import Alhajj from "../Assets/FarukAhmed.jpg";
import Eng from "../Assets/Fairuz-Ahmed.jpg";
import Salma from "../Assets/SalmaBegum.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function About() {
  return (
    <div>
      <Container>
        <div className="About-section font-sans font-semibold shadow-2xl">
          <div className="About animate__animated animate__zoomIn">
            <h1 className="text-4xl font-bold uppercase text-red-400">
              Company Profile
            </h1>
            <h4 className="text-red-600 font-bold">Silver Developers Ltd.</h4>
            <p>
              has become a trusted name in the real estate sector in Bangladesh.
              From its very inception, the company has won the confidence and
              goodwill of its client’s achieving & satisfaction. Within a short
              span of time, Silver Developers Ltd. has grown into a renowned and
              dependable organization, building elegant, aesthetically pleasing
              structures that grace Cumilla’s finest neighborhoods. Silver
              Developers Ltd. uses high-quality building materials and finishing
              products to ensure durability and customer satisfaction It’s main
              concentration has been in the prime, attractive locations of
              Cumilla city, the emphasis being on sound construction and
              aesthetic design. Additionally the Company has tried to provide
              accommodations suitable for small families while creating scope
              for the development of residential lands in the vicinity of the
              city. Efforts are underway to cater to the needs of clients in
              every market segment. The success of such a large construction
              company requires specialized labor and highly qualified
              professional backup and it has developed a strong experienced
              competent team of such highly-skilled professionals to work under
              its management.
            </p>
            <br />
            <h4 className="text-teal-600 font-bold">Introduction:</h4>
            <p>
              At present,
              <span className="font-bold text-red-600">
                {" "}
                Silver Developers Ltd.
              </span>{" "}
              has forty-five (45) apartment building projects at hand in the
              most prestigious areas of Cumilla city such as Kandirpar,
              Jhawtala, Talpakurpar, Thakurpara, Police Line, DC Road, Tamchom
              Bridge and Laxsham Road. Twenty (20) completed apartment buildings
              have already been handed over to its clients. Another Twenty-one
              (21) apartment buildings will be handed over very soon.
            </p>{" "}
            <br />
            <h1 className="text-teal-600 font-bold uppercase">DEPARTMENTS:</h1>
            <p>
              reputation as a reliable real estate company that gives high
              priority to customer’s desire and needs, has been created through
              the hard work and dedication of its workforce. Instead of just
              stressing on good academic qualification which is compulsory for
              the executive level employees, it has selected its staff based on
              their intelligence, creativity and innovation.
            </p>
            <br />
            <h1 className="text-teal-600 font-bold uppercase">
              ADMINISTRATION AND LOGISTIC
            </h1>
            <p>
              <span className="font-bold text-red-600">
                {" "}
                Silver Developers Ltd.
              </span>{" "}
              has 80 security guards working round the clock to ensure the
              security of the residents besides repair and maintenance
              facilities such as plumbing and prompt troubleshooting are being
              handled by professional workers. Permanent maintenance personnel
              ensure that the apartments are in good condition.
            </p>
            <br />
            <h1 className="text-teal-600 font-bold uppercase">
              ACCOUNTS AND FINANCE
            </h1>
            <p>
              <span className="font-bold text-red-600">
                {" "}
                Silver Developers Ltd.
              </span>{" "}
              has An Experienced Team In This Department Headed By Senior Most
              Cost And Management Accounting Professionals Of Bangladesh.
            </p>
            <br />
            <h1 className="text-teal-600 font-bold uppercase">
              ENGINEERING&DESIGN
            </h1>
            <p>
              <span className="font-bold text-red-600">
                {" "}
                Silver Developers Ltd.
              </span>{" "}
              has developed an in-house design team for architectural,
              structural, planning & electrical design. The company has 25
              engineers in the construction and development team in addition to
              its quality control, monitoring & evaluation, and construction
              management personnel with many senior-level professionals,
              engineers, architects, planners trained at home and abroad and
              eminent personalities of the country.
            </p>{" "}
            <br />
            <h1 className="text-teal-600 font-bold uppercase">
              MARKETING AND CoUSTOMER SERVICE
            </h1>
            <p>
              One of the strongest points Silver Developers Ltd. is its
              efficient customer service department. This department gives
              personal attention to each client and is known for its prompt,
              effective action. A warm, friendly atmosphere is created for the
              client who can make purchase decisions at his/her pace without
              feeling pressurized
            </p>
          </div>
          <h1 className="text-red-600 font-bold text-4xl text-center">Board of Director</h1>
          <div className="Profile">

            <div  data-aos="zoom-in" className="shadow-2xl" >
              <img src={Alhajj} alt="alhajj"/>
              <h1>RTN. Al-hajj,faruk Ahmed</h1>
              <h2>Chair man</h2>
              <p>M.com in management</p>
              <p>Chittagong University</p>
              <p>Call:+01713026500</p>
            </div>
            <div  data-aos="zoom-in" className="shadow-2xl">
            <img src={Salma} alt="Salma"/>
              <h1>RTN. Salma Begum</h1>
              <h2>Managing Director</h2>
              <p>MSS in public administartion</p>
              <p>Dhaka University</p>
              <p>Call:01712999980</p>
            </div>
            <div  data-aos="zoom-in" className="shadow-2xl">
            <img src={Eng} alt="Eng"/>
           
              <h1>Eng. Fairuz Ahmed</h1>
              <h2> Director</h2>
              <p>B.Sc in civil Eng</p>
              <p>Islamic University of Technology(IUT)</p>
              <p>Call:01755605882</p>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
