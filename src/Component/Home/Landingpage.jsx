import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import Animatedletters from "./Animetedlatter";
import Typewriter from "./typewriter";

const LandingPage = () => {
  const vantaRef = useRef(null);
  const [letterClass, setLetters] = useState('text-animate')
  const FArray = ['F', 'i', 'n', 'a', 'n', 'c', 'e', ' ']
  const AArray = ['a', 'n', 'd']
  const EArray = [' ', 'E', 'c', 'o', 'n', 'o', 'm', 'i', 'c', 's', ' ', 'C', 'l', 'u', 'b']

  const placeArray = ['I', 'I', 'T', ' ', 'K', 'H', 'A', 'R', 'A', 'G', 'P', 'U', 'R']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetters('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section >
      <div id="main">
        <section id="left">
          <div className="heading">
            <h1 style={{ fontSize: '35px', fontWeight: '700' }}>
              <span>
                <Animatedletters
                  letterClass={letterClass}
                  strArray={FArray}
                  idx={15}
                />
              </span>
              <span style={{ fontWeight: '400' }}><Animatedletters
                letterClass={letterClass}
                strArray={AArray}
                idx={23}
              /></span>
              <span><Animatedletters
                letterClass={letterClass}
                strArray={EArray}
                idx={26}
              /></span>
              <br />
              <span style={{ color: '#63BB54' }}>
                <Animatedletters
                  letterClass={letterClass}
                  strArray={placeArray}
                  idx={42}
                />
              </span>
            </h1>
          </div>
          <br />
          <div>
            <Typewriter textArray={['Be an asset to everyone...', 'Not a liability !!!']} period={1000} />
            {/* // className="typewriter link-light"
            // data-period="4000"
            // data-type='[ "Be an asset to everyone", "Not a liability !!!"]'
            // style={{ fontSize: '25px', fontWeight: 800, fontFamily: 'Manrope' }} */}
          </div>
          <div className="note">
            <p style={{ fontSize: '18px', textAlign: 'justify', fontWeight: 800 }}>
              The Finance and Economics Club (FEC) functions as a platform for enthusiastic students to come together and learn the intriguing and fun world of finance, by organizing introductory sessions for people who are interested in finance but do not have any prior knowledge, through inviting Industry Leaders and alumni
              <br /><br />
            </p>
          </div>

          <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: '0%',
              padding: '2% 5%',
              color: '#63BB54',
              border: '#f1dc8d',
              borderRadius: '10px',
              borderStyle: 'solid'
            }}
          >
            Register for Future Events Here
          </a>
        </section>
        <section id="right" >
          <img src="images/logo.png" alt="Main Right" style={{ maxWidth: '100%' }} />
        </section>
      </div>
    </section>
  );


  const effect = initVanta();


  return (
    <div className="landing-page" ref={vantaRef}>
      <img src="images/text.png" alt="Landing Page Image" />
    </div>
  );
}
