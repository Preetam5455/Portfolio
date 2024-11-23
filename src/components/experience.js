import '../styles/expereance.css';

function Experience() {
    return (
      <div className="experience">
  <section className="experience-section">
      <h1 className="section-title">
        Work Experience 
        <span className="material-symbols-outlined icon-color">engineering</span>
      </h1>
    <div className="experience-details">
      <article className="job">
        <h2 className="job-title">
        Aptlogica Technologies Pvt. Ltd. Software Developer 
          <span className="job-duration"> Jan 2022 – Present</span>
        </h2>
        <ul className="project-list">
        <li className="project">
            <h4 className="project-name">Project: Google Pixel Simulator</h4>
            <p className="project-description">
              <strong>Description:</strong> Developed a Google Pixel Simulator module for the official Google Pixel phone website. The simulator allows users to explore and interact with various features of the Pixel phone, providing an immersive experience that highlights the device's capabilities.
            </p>
            <p className="project-skills">
              <strong>Skills:</strong>: lit library, web components, rollup configurations,
                      i18n localization, JavaScript, node.js scripts, GitHub, GitLab.
            </p>
          </li>
          <li className="project">
            <h4 className="project-name">Project: Sgpulse Framework (Lit Library based Web Component Framework - WIP)</h4>
            <p className="project-description">
              <strong>Description:</strong> Developed the Sgpulse Framework, a customized JavaScript framework designed to meet specific e-learning requirements. Created various interactive components such as MCQs, Code Editor, Object Matching, Dropdown Matching, Drag and Drop, Flip Card, Hot Graphic, and Narrative elements. Extended the framework with features including Dynamic Assessment Loading, xAPI integration (for storing and restoring user states), Search functionality, Theme Appearance (light and dark mode), Page Level Progress, and Course Progress tracking. The framework is lightweight and passes 89% of the Google Lighthouse performance test.
            </p>
            <p className="project-skills">
              <strong>Skills:</strong> API integrations, JavaScript, Lit Web components, Code Editor, State Management, State Store and Restore, Service worker GitHub, GitLab.
            </p>
            <p className="project-link">
              <strong>Project Link: </strong> 
              <a className='projects-links' href="https://skillsforall.com/launch?id=dc0847b7-d6fc-4597-bc31-38ddd6b07a2f&tab=curriculum&view=e8f10a2b-ae88-535f-98cb-5bd2a7ca8cc8" target="_blank">
                 Client Side Link
              </a>
            </p>
          </li>
          <li className="project">
            <h4 className="project-name">Project: Authoring Tool App</h4>
            <p className="project-description">
              <strong>Description:</strong> A web-component-based content editing app for e-learning, allowing instructors to create courses and assessments dynamically. Includes runtime previews with Sgpulse Framework.
            </p>
            <p className="project-skills">
              <strong>Skills:</strong> Lit library, web components, API integrations, Node.js, database.
            </p>
          </li>
          <li className="project">
            <h4 className="project-name">Project: Review Tool (Annotation)</h4>
            <p className="project-description">
              <strong>Description:</strong> A feature integrated into the Sgpulse Framework for inline content editing, allowing easy content changes and suggestions across multiple languages.
            </p>
            <p className="project-skills">
              <strong>Skills:</strong> API integrations, authentication, change history management.
            </p>
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section className="projects-section">
      <h1 className="section-title">
        My Projects 
        <span className="material-symbols-outlined icon-color">event_repeat</span>
      </h1>
    <div className="projects-details">
      <ul className="project-list">
        <li className="project">
          <h4 className="project-name">React Todo List with Node and PostgreSql:-<a className='projects-links' target='_blank' rel="noopener noreferrer" href='https://preetam5455.github.io/frontend-react-todo-app-node-postgresql/'> live link</a></h4>
          </li>
        <li className="project">
        <h4 className="project-name">Java Script Calculator:-<a className='projects-links' target='_blank' rel="noopener noreferrer" href='https://preetam5455.github.io/Calculator/'> live link</a></h4>
          </li>
        <li className="project">
        <h4 className="project-name">React Weather App:-<a className='projects-links' target='_blank' rel="noopener noreferrer" href='https://preetam5455.github.io/WeatherApp/'> live link</a></h4>
          </li>
        <li className="project">
        <h4 className="project-name">React Password Generator:-<a className='projects-links' target='_blank' rel="noopener noreferrer" href='https://preetam5455.github.io/password-genrator-react-app/'> live link</a></h4>
        </li>
        <li className="project">
        <h4 className="project-name">React Currency Converter:-<a className='projects-links' target='_blank' rel="noopener noreferrer" href='https://preetam5455.github.io/currency-converter-react-app/'> live link</a></h4>
        </li>
      </ul>
    </div>
  </section>
</div>

    );
  }
  
  export default Experience;
  