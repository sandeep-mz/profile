import Nav from "./Components/Nav.js";
import About from "./Components/About.js";
import "./App.css";

import Footer from "./Components/Footer.js";

import Section from "./Components/Section.js";

let SectionData = [
  {
    heading: "Skills",
    discription:
      "I have a strong background in software development with expertise in Java, Python and JavaScript In addition to these language I am also familiar with HTML/CSS for frontend development as well as SQL for database management. My experience includes developing web applications using the Spring Boot framework as SQL for database management. Furthermore, I possess knowledge of agile methodologies such as Sc rum and Lean, enabling me to work efficiently within cross-functional teams. My experience includes developing web applications using various frameworks like Spring Boot for Java and Django for Python. For JavaScript, I use Node.js along with Express.js framework for backend development and ReactJS library for the frontend.",
  },
  {
    heading: "Qulification",
    discription: `I have completed my Bachelor's in Computer Science and Engineering from the University of Del
    HIgh Technolgy, Pune with a CGPA of 8.65/
    10. I am well versed in various programming languages such as C++, Java, Python
    and JavaScript along with frameworks like ReactJS, NodeJS, ExpressJS.
    My proficiency also includes knowledge of databases like SQL and NoSQL.
    Furthermore, I possess strong analytical skills and can effectively work on projects that require data analysis.
    Besides this, I possess good communication skills and can work effectively in a team.`,
  },
  {
    heading:"Projects",
    discription:
    "Here are some projects that I have worked on so far.  These include applications for Android and Web development. You can find the source code for these projects at my GitHub repository."
  }
];

function App() {
  return (
    <div>
      <Nav />
      <About />
      {
        SectionData.map((item,index)=>{
          return(
            <Section key={index}
              heading={item.heading}
              discription={item.discription}          
          /> 
          )         
        })
      }
      <Footer />
    </div>
  );
}

export default App;
