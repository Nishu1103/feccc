
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './About.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const AboutUs = () => {
  const images = [
    { src: "./images/abc.png", alt: " " },
    { src: "./images/ab.png", alt: " " },
    { src: "./images/reso.jpg", alt: " " }
  ];

  return (
    <div className="about-container" style={{top:"50px",
    // position:"relative",
    textAlign:"center",
    padding:"20px",
    
    }}>
      <h1 style={{color:"black"}}>About Us</h1>
      <p style={{color:"black"}}>
        Welcome to [Organization Name], where our mission is to fight hunger and
        feed hope. We believe that everyone deserves access to nutritious food, and
        we're committed to making that a reality for those in need. Our dedicated team
        works tirelessly to collect, organize, and distribute food donations to
        communities across the region.
      </p>
      <div className="slider">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}  
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} style={{ width: '100%' }} />
          ))}
        </Carousel>
      </div>
      <p style={{color:"black"}}>
        Our programs include food pantries, meal services, and educational initiatives
        to teach nutrition and healthy eating habits. We partner with local farmers,
        businesses, and volunteers to ensure that surplus food reaches those who need
        it most, reducing waste and nourishing our community.
      </p>
      <p style={{color:"black"}}>
        Join us in our fight against hunger. Whether you donate food, time, or funds,
        your support makes a significant impact. Together, we can create a world where
        no one goes hungry.
      </p>
    </div>
  );
};

export default AboutUs;
