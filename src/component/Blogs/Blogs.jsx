import "./Blogs.css";

const Blogs = () => {
    return (
        <>
  <section className="title container">
    <div className="row">
      <div className="col-md-12">
        <h1>Blogs </h1>
        <div className="seperator" />
        <p>Read some more Blogs </p>
      </div>
    </div>
  </section>
  {/* Start Blog Layout */}
  <div className="container">
    <div className="row">
      <div className="col-md-6 item">
        <div className="item-in">
          <h4>Some Kind of Title</h4>
          <div className="seperator" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            expedita eveniet consectetur, voluptates voluptatum, sit excepturi
            earum. Veniam eius amet, accusantium, deserunt officia, quos qui
            debitis laboriosam velit quis autem!
          </p>
          <a href="#">
            Read More
            <i className="fa fa-long-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-md-6 item">
        <div className="item-in">
          <h4>Some Kind of Title</h4>
          <div className="seperator" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            expedita eveniet consectetur, voluptates voluptatum, sit excepturi
            earum. Veniam eius amet, accusantium, deserunt officia, quos qui
            debitis laboriosam velit quis autem!
          </p>
          <a href="#">
            Read More
            <i className="fa fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <h1 style={{ textAlign: "center" }}>
      Instagram post  
    </h1>
    {/* With Icons */}
    <div className="row">
      <div className="col-md-6 item">
        <div className="item-in">
          <div className="icon">
            <a href="#">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 16.662 16.662"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <g>
                  <path
                    d="M13.365,0.324H3.297L0,5.109l8.331,11.229l8.331-11.229C16.662,5.109,13.365,0.324,13.365,0.324z    M15.213,4.734h-3.4l1.298-3.054C13.111,1.68,15.213,4.734,15.213,4.734z M12.526,1.303l-1.342,3.156L9.071,1.303H12.526z    M10.544,4.734H6.442l1.909-3.273L10.544,4.734z M7.648,1.303L5.856,4.378L4.185,1.303H7.648z M3.584,1.634l1.685,3.1h-3.82   C1.449,4.734,3.584,1.634,3.584,1.634z M1.45,5.421h4.124l1.95,8.184C7.524,13.605,1.45,5.421,1.45,5.421z M6.279,5.421h4.548   l-2.468,8.732C8.359,14.153,6.279,5.421,6.279,5.421z M9.28,13.413l2.259-7.992h3.672L9.28,13.413z"
                    fill="#777777"
                  />
                </g>
              </svg>
              <div className="icon-topic">Work Topic</div>
            </a>
          </div>
          <h4>Some Kind of Title</h4>
          <div className="seperator" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            expedita eveniet consectetur, voluptates voluptatum, sit excepturi
            earum. Veniam eius amet, accusantium, deserunt officia, quos qui
            debitis laboriosam velit quis autem!
          </p>
          <a href="#">
            Read More
            <i className="fa fa-long-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-md-6 item">
        <div className="item-in">
          <div className="icon">
            <a href="#">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 16.662 16.662"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <g>
                  <path
                    d="M13.365,0.324H3.297L0,5.109l8.331,11.229l8.331-11.229C16.662,5.109,13.365,0.324,13.365,0.324z    M15.213,4.734h-3.4l1.298-3.054C13.111,1.68,15.213,4.734,15.213,4.734z M12.526,1.303l-1.342,3.156L9.071,1.303H12.526z    M10.544,4.734H6.442l1.909-3.273L10.544,4.734z M7.648,1.303L5.856,4.378L4.185,1.303H7.648z M3.584,1.634l1.685,3.1h-3.82   C1.449,4.734,3.584,1.634,3.584,1.634z M1.45,5.421h4.124l1.95,8.184C7.524,13.605,1.45,5.421,1.45,5.421z M6.279,5.421h4.548   l-2.468,8.732C8.359,14.153,6.279,5.421,6.279,5.421z M9.28,13.413l2.259-7.992h3.672L9.28,13.413z"
                    fill="#777777"
                  />
                </g>
              </svg>
              <div className="icon-topic">Another Category or Post Type</div>
            </a>
          </div>
          <h4>Some Kind of Title</h4>
          <div className="seperator" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            expedita eveniet consectetur, voluptates voluptatum, sit excepturi
            earum. Veniam eius amet, accusantium, deserunt officia, quos qui
            debitis laboriosam velit quis autem!
          </p>
          <a href="#">
            Read More
            <i className="fa fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</>

    );
}
export default Blogs;