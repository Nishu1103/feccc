import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    quote: "This product is fantastic! Highly recommend, This product is fantastic! Highly recommend",
    image: "./images/reso.jpg",
  },
  {
    name: "Jane Smith",
    quote: "Amazing experience, will definitely use again, This product is fantastic! Highly recommend",
    image: "./images/reso.jpg",
  },
  {
    name: "Sam Wilson",
    quote: "Top-notch service and quality. Very impressed, This product is fantastic! Highly recommend",
    image: "./images/reso.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    width: "500px",
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial-slider" style={{padding:"20px", margin:"10px"}}>
        <div className="text">
            <h1 style={{
                textAlign: "center",
                padding: "20px",
                color: "black",
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "20px",
                marginTop: "20px",

            }}>Our Governor</h1>
        </div>
      <Slider {...settings} style={{ dispaly: "flex", 
        
       }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="hhh" style={{display:"flex" ,justifyContent:"space-around"
            }}>
              <div className="imgg">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="texxt" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
              
              }}>
                <p>"{testimonial.quote}"</p>
                <h3>- {testimonial.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
