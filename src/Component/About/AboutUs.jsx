// src/AboutUs.js

// import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="logo-content-container">
        <div className="logo-container">
          <img src="images/logo.png" alt="Logo" className="logo" />
          <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
            <defs>
              <path id="circle" d="M 100, 100
                  m -75, 0
                  a 75, 75 0 1, 0 150, 0
                  a 75, 75 0 1, 0 -150, 0" />
            </defs>
            <text width="200">
              <textPath xlinkHref="#circle" className="text">
                FEC IIT KGP FEC IIT KGP FEC IIT KGP FEC IIT KGP FEC IIT KGP 
              </textPath>
            </text>
          </svg>
        </div>
        <div className="content">
          <h2>About Us</h2>
          <p>
            The Finance and Economics Club is a student-led organization at the Indian Institute of Technology Kharagpur dedicated to fostering financial literacy, economic awareness, and professional development among our campus community. Founded by passionate students, our club serves as a hub for those interested in exploring the dynamic worlds of finance, economics, and their intersections with technology and innovation.
          </p>
        </div>
      </div>
      <ul className="goals">
        <li>Our vision is to cultivate financial acumen, economic insight, and leadership in the rapidly evolving global economy. We strive to empower students with practical knowledge and skills, foster critical thinking, and provide networking opportunities with industry leaders and alumni.</li>
        <li>Encouraging innovation and creativity.</li>
        <li>Fostering a collaborative and inclusive environment.</li>
        <li>Driving research and development.</li>
        <li>Community engagement and outreach.</li>
      </ul>
    </div>
  );
}

export default AboutUs;
