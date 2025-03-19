
import '../styles/home.css';
import myImage from '../assets/1706554951052.jpg';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';


function Home() {
  return (
    <div className="profile">
      <div className="profile_data">
        <div className="profile_text">
          <h2 className="role_title">Developer</h2>
          <h1>Preetam Chavan</h1>
          <div className="about_section">Experienced developer with 3+ years of building efficient, 
high-performance web applications with good analyzing and 
problem-solving. Expertise in React.js, JavaScript, Node.js, 
and Web Components, with a passion for enhancing user 
experiences and continuously evolving technical skills and a 
passion for continuous learning in a fast-paced 
development environment.
          </div>
            <div className="footer_icons">Check out me on:
              <a target='_blank' href='https://www.linkedin.com/in/preetam-chavan-a72b59221/' rel="noopener noreferrer"><img id='icons-logo' src={linkedin}/></a>
            </div>
          </div>
        <div className="profile_photo"><img id='profile-photo' src={myImage}/> </div>
      </div>
    </div>
  );
}

export default Home;
