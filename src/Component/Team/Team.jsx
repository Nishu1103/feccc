
import './team.css';

export default function Team() {
  const teamData = {
    groupPhoto: './images/teams.png',
    teams: [
      {
        name: 'Finance Team',
        members: [
          {
            name: 'Alice Smith',
            image: './images/a.png',
            linkedin: 'https://www.linkedin.com/in/alice-smith',
            facebook: 'https://www.facebook.com/alice.smith'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          }
          
          // Add more finance team 
        ]
      },
      {
        name: 'Branding and Strategy Team',
        members: [
          {
            name: 'Bob Johnson',
            image: './images/aaa.png',
            linkedin: 'https://www.linkedin.com/in/bob-johnson',
            facebook: 'https://www.facebook.com/bob.johnson'
          },
          {
            name: 'Emily Clark',
            image: './images/aa.png',
            linkedin: 'https://www.linkedin.com/in/emily-clark',
            facebook: 'https://www.facebook.com/emily.clark'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'David Johnson',
            image: './images/aaaa.png',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          }
        ]
      },
      {
        name: 'Tech Team',
        members: [
          {
            name: 'Nishant Kumawat',
            image: './contact/Nishant.jpg',
            linkedin: 'https://www.linkedin.com/in/charlie-brown',
            facebook: 'https://www.facebook.com/charlie.brown'
          },
          {
            name: 'Chirag Jindal',
            image: './contact/Chirag.jpeg',
            linkedin: 'https://www.linkedin.com/in/chirag-jindal-456682223/',
            facebook: 'https://www.facebook.com/abhimanyu.jindal.167/'
          },
          {
            name: 'Kumar Ravi',
            image: './contact/KumarRavi.jpg',
            linkedin: 'https://www.linkedin.com/in/kumar-ravi-a9391a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/kumarravi.000'
          }
           
        ]
      }
    ]
  };

  return (
    <div className="team-container">
      <div className="group-photo">
        <img src={teamData.groupPhoto} alt="Group" />
      </div>

      {teamData.teams.map((team, index) => (
        <div key={index} className="team-section">
          <h2>{team.name}</h2>
          <div className="team-members">
            {team.members.map((member, idx) => (
              <div key={idx} className="team-member">
                <img src={member.image} alt={member.name} className="member-photo" />
                <h3>{member.name}</h3>
                <div className="social-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
