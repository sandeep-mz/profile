import React from "react";
import profileimg from "../img.png";

const About = () => {
  return (
    <div className="about">
      <h1 className="a-heading">About</h1>
      <div className="profile"><img src={profileimg} alt="profile" /></div>
      <p>
        I am a full stack developer with experience in building websites and
        applications using JavaScript, Node.js, Express, MongoDB, MySQL,
        Sequelize ORM, HTML & CSS. I have a strong foundation in problem-solving
        skills and enjoy working on projects that require critical thinking. I
        am a passionate and results-driven full-stack developer with a diverse
        skill set and a proven track record of building robust and scalable
        websites and applications. My expertise spans various technologies, and
        I am proficient in leveraging them to create seamless and efficient
        solutions.<br /> <b>Technical Proficiency:</b> Frontend Development: I excel in
        crafting intuitive and user-friendly interfaces using HTML, CSS, and
        JavaScript. My commitment to creating engaging user experiences is
        reflected in my attention to detail and adherence to modern design
        principles. <br />Backend Development: I am well-versed in server-side
        programming with Node.js and Express. My backend solutions are not only
        performant but also maintainable, following best practices and design
        patterns. Database Management: I have hands-on experience with both SQL
        and NoSQL databases, including MongoDB and MySQL. My expertise in data
        modeling and query optimization ensures efficient and scalable data
        storage solutions. <br />ORM Expertise: I have utilized Sequelize ORM to
        seamlessly interact with relational databases, streamlining the
        development process and enhancing database management.
         
      </p>
    </div>
  );
};

export default About;
