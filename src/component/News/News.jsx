import  { useEffect, useState } from 'react';
import './News.css';
// import NewsPage from '../../newspage/NewsPage';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://finnhub.io/api/v1/news?category=general&token=cpib18hr01qpf0qhd26gcpib18hr01qpf0qhd270');
        const data = await response.json();
        console.log('Data type:', typeof data);
        console.log('Data:', data);

        if (Array.isArray(data)) {
          setNews(data.slice(0, 5)); // Show only the top 5 news articles
        } else {
          console.error('Fetched data is not an array');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (news.length === 0) {
    return <div className="no-news">No news available</div>;
  }

  const bigHeadlines = news.slice(0, 2);
  const latestHeadlines = news.slice(2);

  return (
    <>
    {/* <NewsPage/> */}
    
    <div className="news-container">
      <h1>Big Headlines</h1>
      <div className="big-headlines">
        {bigHeadlines.map((article, index) => (
          <div key={index} className="big-headline">
            <h2>{article.headline}</h2>
            <img src={article.image} alt={article.headline} />
            <p>{new Date(article.datetime * 1000).toLocaleString()}</p>
            {/* <p>{article.summary}</p> */}
            {/* <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> */}
          </div>
        ))}
      </div>
      <h1>Latest Headlines</h1>
      <div className="latest-headlines">
        {latestHeadlines.map((article, index) => (
          <div key={index} className="latest-headline">
            <h3>{article.headline}</h3>
            {/* <img src={article.image} alt={article.headline} /> */}
            <p>{new Date(article.datetime * 1000).toLocaleString()}</p>
            {/* <p>{article.summary}</p> */}
            {/* <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
