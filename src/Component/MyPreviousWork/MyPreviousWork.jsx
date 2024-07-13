
import './MyPreviousWork.css';

const works = [
  {
    title: 'Project 1',
    image: 'images/teams.png',
    description: 'Description for project 1',
    link: '#'
  },
  {
    title: 'Project 2',
    image: 'images/teams.png',
    description: 'Description for project 2',
    link: '#'
  },
  {
    title: 'Project 3',
    image: 'images/teams.png',
    description: 'Description for project 3',
    link: '#'
  },
  {
    title: 'Project 4',
    image: 'images/teams.png',
    description: 'Description for project 4',
    link: '#'
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
