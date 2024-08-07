import { useEffect, useRef } from "react";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="left">
        <h1>
          Finance <span>and</span> Economics club
          <br />
          <span>IIT Kharagpur</span>
        </h1>
        <div className="typing">Typewriting effect</div>
        <div className="para">
          <p>
            The Finance and Economics Club (FEC) functions as a platform for
            enthusiastic students to come together and learn the intriguing and
            fun world of finance, by organizing introductory sessions for people
            who are interested in finance but do not have any prior knowledge,
            through inviting Industry Leaders and alumni
          </p>
        </div>
      </section>
      <section className="right">
        <img src="images/text.png" alt="Landing Page Image" />
      </section>
    </div>
  );
}
