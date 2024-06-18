
import './team.css';

export default function Team() {
  const teamData = {
    groupPhoto: './images/teams.png',
    teams: [
      {
        name: 'Finance Team',
        members: [
          {
            name: 'Divyansh Gupta',
            image: './contact/Divyansh.webp',
            linkedin: 'https://www.linkedin.com/in/alice-smith',
            facebook: 'https://www.facebook.com/alice.smith'
          },
          {
            name: 'Ketul Sagar',
            image: './contact/Ketul_Sagar.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Aman gupta ',
            image: './contact/AmanGupta.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Jagrut Karnavat ',
            image: './contact/Divysh.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Aviral Singh',
            image: './contact/aviralsingh.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Jai jain',
            image: './contact/jai.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Riya Salunkhe',
            image: './contact/RiyaSalunkhe.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Shriyansh asati',
            image: './contact/Diyansh.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Pranav Senthilkumar',
            image: './contact/PranavSenthilkumar.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Shivee Gupta',
            image: './contact/ShiveeGupta.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Ritabrata Bharati',
            image: './contact/Ritabrata.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Saurabh Raj',
            image: './contact/SaurabhRaj.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          }
        ]
      },
      {
        name: 'Branding and Strategy Team',
        members: [
          {
            name: 'Jatain Kumar ',
            image: './contact/Divyans.webp',
            linkedin: 'https://www.linkedin.com/in/bob-johnson',
            facebook: 'https://www.facebook.com/bob.johnson'
          },
          {
            name: 'Ashwini Raj',
            image: './contact/Ashwini_Raj.webp',
            linkedin: 'https://www.linkedin.com/in/emily-clark',
            facebook: 'https://www.facebook.com/emily.clark'
          },
          {
            name: 'Palak Agrawal ',
            image: './contact/PalakAgrawal.webp',
            linkedin: 'https://www.linkedin.com/in/david-johnson',
            facebook: 'https://www.facebook.com/david.johnson'
          },
          {
            name: 'Aishwarya Maan Srivastava',
            image: './contact/AishwaryaMaanSrivastava.webp',
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
            image: './contact/Nishant.webp',
            linkedin: 'https://www.linkedin.com/in/charlie-brown',
            facebook: 'https://www.facebook.com/charlie.brown'
          },
          {
            name: 'Chirag Jindal',
            image: './contact/ChiragJindal.webp',
            linkedin: 'https://www.linkedin.com/in/chirag-jindal-456682223/',
            facebook: 'https://www.facebook.com/abhimanyu.jindal.167/'
          },
          {
            name: 'Kumar Ravi',
            image: './contact/KumarRavi.webp',
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
