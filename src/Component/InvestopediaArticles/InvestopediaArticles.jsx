 
import './InvestopediaArticles.css';

const articles = [
  {
    title: 'What is a Financial Market?',
    image:   'images/teams.png',
    description: 'Learn about financial markets, how they work, and why they are important.',
    link: 'https://www.investopedia.com/terms/f/financial-market.asp'
  },
  {
    title: 'Understanding the Stock Market',
    image: 'images/teams.png',
    description: 'An overview of the stock market, including its history, how it works, and key terms.',
    link: 'https://www.investopedia.com/terms/s/stock-market.asp'
  },
  {
    title: 'Guide to Personal Finance',
    image: 'images/teams.png',
    description: 'A comprehensive guide to managing your personal finances, including budgeting, saving, and investing.',
    link: 'https://www.investopedia.com/personal-finance-4427766'
  },
  {
    title: 'Introduction to Bonds',
    image: 'images/teams.png',
    description: 'Learn about bonds, including how they work, their benefits, and different types of bonds.',
    link: 'https://www.investopedia.com/terms/b/bond.asp'
  }
];

const InvestopediaArticles = () => {
  return (
    <div className="investopedia-articles">
      <h2>Investopedia Articles on Finance</h2>
      <div className="article-container">
        {articles.map((article, index) => (
          <div className="article-box" key={index}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvestopediaArticles;
