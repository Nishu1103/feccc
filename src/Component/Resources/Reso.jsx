import "./Reso.css";
export default function Resources() {
  return (
    <>
      <div className="resources-Container" style={{border:"solid black"}}>
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
              <a href="https://www.investopedia.com/" target={"_blank"}>
                Investopedia - A comprehensive resource for investing and
                personal finance.
              </a>
            </li>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.bloomberg.com/" target={"_blank"}>
                Bloomberg - Business news, data, and analysis.
              </a>
            </li>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.cnbc.com/" target={"_blank"}>
                CNBC - Business news and financial information.
              </a>
            </li>
            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.wsj.com/" target={"_blank"}>
                The Wall Street Journal - Business news and analysis.
              </a>
            </li>

            <li>
              <img
                src="./images/reso.jpg"
                alt="reso"
              />
              <a href="https://www.barrons.com/" target={"_blank"}>
                Barrons - Financial news and analysis.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
