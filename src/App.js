import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Skills from './components/skills';
import Experience from './components/expreance';
import Contact from './components/contact';
import HobbiesAndLang from './components/hobbies-and-Languages';
import cv from './assets/updated resume 08-02.pdf';

function App() {
  return (
    <div className="App">
    <div className="home">
    <BrowserRouter>
    <header>
        <div className="header_portfolio_text"><Link to="/"><span>P</span>ortfolio</Link><p className='header-name-label'>Preetam Chavan</p></div>
        <div className="header_menuLink navbar">
          <div><Link to="/skills">Skills</Link></div>
          <div><Link to="/experience">Expreance and Projects</Link></div>
          <div><Link to="/Languages&hobbies">Languages & Hobbies</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <div><a href={cv} download> Downloade CV </a></div>
          <div><a href="https://github.com/Preetam5455" target="_blank">GitHub Profile </a></div>
        </div>
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Languages&hobbies" element={<HobbiesAndLang />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div> 
    </div>
  );
}

export default App;
