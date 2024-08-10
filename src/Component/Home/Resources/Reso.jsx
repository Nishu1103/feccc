import "./Reso.css";

export default function ResourcesHome() {
  return (
    <div className="resources-container">
      <header className="header">
        <h1>Resources</h1>
        <p>
          Explore our collection of valuable resources to learn more about the
          stock market and investing.
        </p>
      </header>
      <section className="featured-resource">
        <img src="./images/teams.png" alt="Featured Resource" />
        <div className="featured-text">
          <h2>Featured Resource</h2>
          <p>
            Dive into our comprehensive guide on investment strategies for beginners.
          </p>
          <a className="button"  target={"_blank"} href="/featured-guide">Read the Guide</a>
        </div>
      </section>
      <section className="reso-list">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <img src="./images/teams.png" alt="Investopedia" />
            <a href="https://www.investopedia.com/" target={"_blank"}>
              Investopedia - A comprehensive resource for investing and personal finance.
            </a>
          </li>
          <li>
            <img src="./images/teams.png" alt="Bloomberg" />
            <a href="https://www.bloomberg.com/" target={"_blank"}>
              Bloomberg - Business news, data, and analysis.
            </a>
          </li>
          <li>
            <img src="./images/teams.png" alt="MarketWatch" />
            <a href="https://www.marketwatch.com/" target={"_blank"}>
              MarketWatch - Stock market quotes, business news, and financial analysis.
            </a>
          </li>
          <li>
            <img src="./images/teams.png" alt="Morningstar" />
            <a href="https://www.morningstar.com/" target={"_blank"}>
              Morningstar - Investment research and data.
            </a>
          </li>
        </ul>
        <a className="button"  target={"_blank"} href="/resources">Explore More Resources</a>
      </section>
    </div>
  );
}
