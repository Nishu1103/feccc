import "./Reso.css";
const Resources = () => {
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
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.cnbc.com/">
                CNBC - Business news and financial information.
              </a>
            </li>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.wsj.com/">
                The Wall Street Journal - Business news and analysis.
              </a>
            </li>

            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.barrons.com/">
                Barron's - Financial news and analysis.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Resources;
