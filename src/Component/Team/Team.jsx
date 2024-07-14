import './team.css';
import { SocialIcon } from 'react-social-icons';
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
            linkedin: 'https://www.linkedin.com/in/divyanshhgupta/',
            facebook: 'https://www.facebook.com/profile.php?id=100087196202941'
          },
          {
            name: 'Ketul Sagar',
            image: './contact/Ketul_Sagar.webp',
            linkedin: 'https://www.linkedin.com/in/ketul-sagar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            facebook: 'https://www.facebook.com/profile.php?id=100088404151277'
          },
          {
            name: 'Aman gupta ',
            image: './contact/AmanGupta.webp',
            linkedin: 'https://www.linkedin.com/in/aman-gupta-134ab4230/',
            facebook: 'https://www.facebook.com/'
          },
          {
            name: 'Aviral Singh',
            image: './contact/aviralsingh.webp',
            linkedin: 'https://www.linkedin.com/in/aviral-singh-6180a1285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/profile.php?id=100087466934423'
          },
          {
            name: 'Riya Salunkhe',
            image: './contact/RiyaSalunkhe.webp',
            linkedin: 'https://www.linkedin.com/in/riyasalunkhe1853?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            facebook: 'https://www.facebook.com/'
          },
          {
            name: 'Shriyansh asati',
            image: './contact/Diyansh.webp',
            linkedin: 'https://www.linkedin.com/',
            facebook: 'https://www.facebook.com'
          },
          {
            name: 'Shivee Gupta',
            image: './contact/ShiveeGupta.webp',
            linkedin: 'https://www.linkedin.com/in/shivee-gupta-544429255/',
            facebook: 'https://www.facebook.com/profile.php?id=100086993780456'
          },
          {
            name: 'Ritabrata Bharati',
            image: './contact/Ritabrata.webp',
            linkedin: 'https://www.linkedin.com/in/ritabrata-bharati-a724a824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/profile.php?id=100087764766972&mibextid=ZbWKwL'
          },
          {
            name: 'Saurabh Raj',
            image: './contact/SaurabhRaj.webp',
            linkedin: 'https://www.linkedin.com/in/saurabh-raj-669999258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/share/AX1RA3eDkPi115bS/?mibextid=qi2Omg'
          }
        ]
      },
      {
        name: 'Branding and Strategy Team',
        members: [
          {
            name: 'Jatain Kumar ',
            image: './contact/Divyans.webp',
            linkedin: 'https://www.linkedin.com/in/jatainkumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/jatain.kumar.17?mibextid=ZbWKwL'
          },
          {
            name: 'Palak Agrawal ',
            image: './contact/PalakAgrawal.webp',
            linkedin: 'https://www.linkedin.com/in/palak-agrawal-0a546724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            facebook: 'https://www.facebook.com/profile.php?id=100086204021248&mibextid=ZbWKwL'
          },
          {
            name: 'Aishwarya Maan Srivastava',
            image: './contact/AishwaryaMaanSrivastava.webp',
            linkedin: 'https://www.linkedin.com/in/aishwarya-maan-srivastava-b883a1255/',
            facebook: 'https://www.facebook.com/profile.php?id=100087460456348'
          }
        ]
      },
      {
        name: 'Tech Team',
        members: [
          {
            name: 'Nishant Kumawat',
            image: './contact/Nishant.webp',
            linkedin: 'https://www.linkedin.com',
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
                <SocialIcon url={member.linkedin} style={{ height: 25, width: 25 }} />
                <SocialIcon url={member.facebook} style={{ height: 25, width: 25 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
