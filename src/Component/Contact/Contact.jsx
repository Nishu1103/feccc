import React from "react";
import "./contacts.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="main">
        <h1 className="">Contact Us</h1>
        <div className="info">
          <div className="address">
            <h2>Address</h2>
            <p>IIT KGP</p>
            <span>West Bengal, 721302</span>
          </div>
          <div className="phone">
            <h2>Phone</h2>
            <p>+91 8302963154</p>
          </div>
          <div className="mail">
            <h2>Mail</h2>
            <p>
              fec.iitkgp@gmail.com
            </p>
          </div>
        </div>
        <div className="social" data-aos="fade-left" data-aos-offset="150" style={{height:"200px"}}>
          <div>
            <h2 className="title">Instagram</h2>
            <div className="logo">
              <a target="_blank" href="https://www.instagram.com/fec_iitkgp/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="100"
                  height="100"
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                     <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                     <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2 className="title">LinkedIn</h2>
            <div className="logo">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/fec-iit-kharagpur-67585b27a/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="100"
                  height="100"
                  id="linkedin"
                >
                  <switch>
                    <g>
                      <path
                        fill="#0A7BBA"
                        d="M506 256.879c0 138.066-111.934 250-250 250-138.067 0-250-111.934-250-250 0-138.067 111.933-250 250-250 138.066 0 250 111.933 250 250zm0 0"
                      ></path>
                      <path
                        fill="#F2F2F2"
                        d="M405.36 276.985v103.076h-59.753v-96.157c0-24.153-8.617-40.647-30.269-40.647-16.493 0-26.308 11.119-30.638 21.869-1.588 3.83-1.98 9.161-1.98 14.558v100.378h-59.774s.805-162.873 0-179.734h59.774v25.478c-.108.196-.282.389-.392.585h.392v-.585c7.943-12.227 22.108-29.702 53.856-29.702 39.321 0 68.784 25.698 68.784 80.881zM160.452 113.698c-20.455 0-33.815 13.426-33.815 31.052 0 17.255 12.969 31.049 33.032 31.049h.37c20.846 0 33.815-13.793 33.815-31.049-.392-17.625-12.969-31.052-33.402-31.052zm-30.268 266.364h59.731V200.328h-59.731v179.734zm0 0"
                      ></path>
                    </g>
                  </switch>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;