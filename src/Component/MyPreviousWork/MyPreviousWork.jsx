
import './MyPreviousWork.css';

const works = [
  {
    title: 'Workshop on Quantitative Finance',
    image: 'images/post1.jpeg',
    description: 'Description for project 1',
    link: 'https://www.linkedin.com/posts/fec-iit-kharagpur_iitkgp-quant-finance-activity-7209834129436168192-hHbw?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'Our Quantitative Finance Projects',
    image: 'images/post2.jpeg',
    description: 'Description for project 2',
    link: 'https://www.linkedin.com/posts/fec-iit-kharagpur_finance-dataanalysis-financeprojects-activity-7211975164329095168-hiy8?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'Roadmap on Finance',
    image: 'images/ddd.png',
    description: 'Description for project 3',
    link: 'https://medium.com/@fec.iitkgp/exploring-career-paths-in-finance-acaf3f438ca1'
  },
  {
    title: 'Summer of Finance',
    image: 'images/dd.png',
    description: 'Description for project 4',
    link: 'https://boatneck-cougar-e3c.notion.site/SUMMER-OF-FINANCE-79cc8e8d272b479e9a8fcf1e916314ad'
  }
];

const MyPreviousWork = () => {
  return (
    <div className="my-previous-work">
      <h2>Previous Work</h2>
      <div className="work-container">
        {works.map((work, index) => (
          <div className="work-box" key={index}>
            <img src={work.image} alt={work.title} className="work-image" />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPreviousWork;
