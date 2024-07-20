// SponsorCarousel.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const sponsors = [
  { image: "./images/teams.png", name: "Sponsor 1" },
  { image: "./images/teams.png", name: "Sponsor 2" },
  { image: "./images/teams.png", name: "Sponsor 3" },
  { image: "./images/teams.png", name: "Sponsor 4" },
  { image: "./images/teams.png", name: "Sponsor 5" },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="sponsor-carousel">
      <h2 style={{
        textAlign: "center",
        color: "black",

      }}> Our collaboration</h2>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor" style={{display:"flex"}}>
            <img src={sponsor.image} alt={sponsor.name} className="sponsor-img" />
            {/* <p>{sponsor.name}</p> */}

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
