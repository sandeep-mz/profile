import Nav from "./Components/Nav.js"
import About from "./Components/About.js";
import './App.css';
import Skill from "./Components/Skill.js";
import Qulification from "./Components/Qulification.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";


function App() {
  return (
    <div>
        <Nav />
        <About />
        <Skill />
        <Qulification />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
