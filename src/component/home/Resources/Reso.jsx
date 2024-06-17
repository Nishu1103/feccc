import "./Reso.css";
const ResourcesHome = () => {
  return (
    <>
      <div className="resources-Container">
        <div className="main-reso" style={{display:"flex !important"}}>
          <div className="reso-text">
            <h1>Resources</h1>
            <p>
              Here are some resources that you can use to learn more about the
              stock market and investing.
            </p>
          </div>

          <div className="reso-image">
            <img
              src="./images/reso.jpg"
              alt="reso"
            />
          </div>
        </div>
        <div className="reso-list">
          <ul>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.investopedia.com/">
                Investopedia - A comprehensive resource for investing and
                personal finance.
              </a>
            </li>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.bloomberg.com/">
                Bloomberg - Business news, data, and analysis.
              </a>
            </li>
             
             
          </ul>
          <a href="/resources">read more</a>
        </div>
      </div>
    </>
  );
};
export default ResourcesHome;
