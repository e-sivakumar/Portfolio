import "../styles/About.css";
import { FileText, Download } from "lucide-react";

const About = () => {
  return (
    <div>
      <section id='AboutSection'>
      <div id='AboutCol'>

        <div id="AboutMain">
        <h1>About Me</h1>
          <p>
          I am a backend developer with a solid foundation in Node.js and experience working with
MySQL and MongoDB.<br/> Over the past 2 years, I have contributed to several successful
projects by delivering effective backend solutions. I am dedicated to improving my skills
and growing as a backend developer. Primarily focused on backend development but
eager to contribute across other areas of software development when needed.

                 </p>
          

      </div>
        

        <div id='Qualification'>
            <h2>Qualification</h2>
            <div id="SubCol">
            <h4>B.SC - Information Technology</h4>
            <p>GPA - 9.2</p>
          <p>The American College (2018 - 2021)</p>
          </div>
        </div>
        <div id="ResumeButtons">
          <a
            href="/Sivakumar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn view-btn"
          >
              <FileText size={18} color="white" style={{ marginRight: "8px" }} />
             View Resume
          </a>
          <a
            href="/Sivakumar-Resume.pdf"
            download
            className="resume-btn download-btn"
          >
          <Download size={18} color="white" style={{ marginRight: "8px" }} />
          Download Resume
          </a>
        </div>

      </div>
    </section>
    </div>
  );
};

export default About;