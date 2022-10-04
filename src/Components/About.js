import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
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
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team1.jpg"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Some one@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team2.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>some@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team2.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Builder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>some@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team3.jpg"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Some one@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team1.jpg"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Some one@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team2.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>some@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team2.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Builder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>some@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="/w3images/team3.jpg"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Some one</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Some one@example.com</p>
                <p>
                  <Link to="Contact" className="button">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
