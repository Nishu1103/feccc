import "./About.css";

const About = ()=>{

    return (
<section className="about-section">
  <div className="container">
    <div className="row">
      <div className="content-column" style={{display:"flex"}}>
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
        <div className="inner-column">
          <div className="sec-title">
             
            <h2>About Us</h2>
          </div>
          <div className="text">
                Our mission is to provide a platform for the students of IIT Kharag
                pur to showcase their talents and skills. We aim to provide a platform for
                students to learn and grow. We aim to provide a platform for students to
                showcase their talents and skills. We aim to provide a platform for students to
                learn and grow. We aim to provide a platform for students to showcase their
                talents and skills. We aim to provide a platform for students to learn and grow. We aim
                to provide a platform for students to showcase their talents and skills. We aim to provide a platform           
          </div>
          <div className="text">
            Our mission is to provide a platform for the students of IIT Kharag
            pur to showcase their talents and skills. We aim to provide a platform for
            students to learn and grow. We aim to provide a platform for students to
            showcase their talents and skills. We aim to provide a platform for students to
            learn and grow.
          </div>
        </div>
      </div>
      
       
    </div>
    <div className="sec-title">
      <span className="title">Our Future Goal</span>
      <h2>Finance and Economic club, IIT Kharagpur</h2>
    </div>
    <div className="text">
      Our mission is to provide a platform for the students of IIT Kharagpur to showcase
      their talents and skills. We aim to provide a platform for students to learn and grow.
    </div>
    <div className="text">
       Our mission is to provide a platform for the students of IIT Kharagpur to showcase
       their talents and skills. We aim to provide a platform for students to learn and grow.
    </div>
    <div className="text">
      Our mission is to provide a platform for the students of IIT Kharagpur to showcase
      their talents and skills. We aim to provide a platform for students to learn and grow.
    </div>
    <div className="text">
      Our mission is to provide a platform for the students of IIT Kharagpur to showcase
      their talents and skills. We aim to provide a platform for students to learn and grow.
    </div>
    <div className="text">
       Our mission is to provide a platform for the students of IIT Kharagpur to showcase
       their talents and skills. We aim to provide a platform for students to learn and grow.
    </div>
  </div>
</section>

    )
}

export default About