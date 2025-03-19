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
                <h4 className="project-name">Project:  Google Pixel Simulator (ReactJS)</h4>
                <p className="project-description">
                  <strong>Description:</strong>  Developed a Google Pixel Simulator for the official
                  Pixel website, enabling users to explore and interact with device
                  features for an immersive experience.
                </p>
                <p className="project-skills">
                  <strong>Skills:</strong>: ReactJS, i18n localization, Context API, node.js scripts.
                </p>
              </li>
              <li className="project">
                <h4 className="project-name">Project: Sgpulse Framework (Lit Web Component Library based JavaScript  Framework - WIP)</h4>
                <p className="project-description">
                  <strong>Description:</strong>  Developed the Sgpulse Framework, a lightweight
                  JavaScript framework for e-learning, featuring interactive
                  components (MCQs, Code Editors, Drag & Drop, etc.), XAPI
                  integration, dynamic assessments, theme support, progress
                  tracking. Activity-based learning plugins with lit web
                  components, and improved user experience
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
                <h4 className="project-name">Project:  Authoring App (ReactJS)</h4>
                <p className="project-description">
                  <strong>Description:</strong> Developed a ReactJS-based content editor,
                  enabling instructors to create and edit courses using
                  templates, dynamically generate assessments, template
                  based course creation, real-time data preview with the help of
                  above Sgpulse Framework.
                </p>
                <p className="project-skills">
                  <strong>Skills:</strong> Lit library, web components, API integrations, Node.js, database.
                </p>
              </li>
              <li className="project">
                <h4 className="project-name">Project: Review Tool (Annotation (ReactJS)) </h4>
                <p className="project-description">
                  <strong>Description:</strong>  Integrated a Review Tool for inline content editing
                  and annotation, enabling content authors to suggest changes,
                  track history, and manage multilingual updates. Features
                  include API integrations, ReactJS, Redux, and change tracking
                  with GitHub/GitLab.
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
