import '../styles/hobbies.css';

function HobbiesAndLang() {
    return (
      <div className="Hobbies">
        <div className="skills_data">
        <div className="skills_text">
          <p className="role_title">Languages</p>
          <div className="about_section">
          <span className="material-symbols-outlined">language</span>
              <ul>
                <li className="hobbies_item">English</li>
                <li className="hobbies_item">Marathi</li>
                <li className="hobbies_item">Hindi</li>
                {/* <li>Lit WebComponent</li>
                <li>Vanilla Js </li>
                <li>webcomponent</li>
                <li> Adapt Framework</li>
                <li> React.js</li>
                <li>Web page </li>
                <li>accessibiliity</li> */}
              </ul>
          </div>
          </div>
        <div className="skills_photo">
        <p className="role_title">Hobbies</p>
        <div className="about_section"></div>
          <ul>
            <li className="hobbies_item">Playing Cricket &nbsp;<span className="material-symbols-outlined">
sports_cricket
</span></li>
            <li className="hobbies_item">Online Gaming(Esports) &nbsp;<span className="material-symbols-outlined">sports_esports</span></li>
            {/* <li>Figma</li>
            <li>Jira</li>
            <li>Chatgpt</li> */}
          </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default HobbiesAndLang;
  