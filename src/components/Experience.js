import "../styles/Experience.css";

const Experience = () => {
  return (
    <div>
      <section id="ExpSection">
        <div id="ExpCol">
          <h1>Experience</h1>
          <div className="expContainer">
            <h2>Junior Developer </h2>
            <h3>Bytecompass LLP</h3>
            <h4>Jun 2023 - Present</h4>
            <div id="ExpMainContent">

              <div>
                <h3>Role </h3>
                <p>
                  <ul>
                    <li>Working as a <strong>MERN Stack Developer</strong>, building full-stack web applications.</li>
                    <li>Developing RESTful APIs, managing databases with <strong>Mongo DB</strong>, and ensuring smooth integration.</li>
                    <li>Implementing secure authentication using <strong>Firebase</strong> and <strong>Passport.js</strong>.</li>
                    <li>Designing responsive UIs in <strong>React</strong> with <strong>Tailwind CSS</strong> for clean and user-friendly interfaces.</li>
                    <li>Contributing to end-to-end development, from API design to deployment and maintenance.</li>
                  </ul></p>
              </div>
            </div>
          </div>
          <div className="expContainer">
            <h2> Digital Associate</h2>
            <h3>Amazon development centre India private limited
            </h3>
            <h4>Oct 2021 - Aug 2022</h4>
            <div id="ExpMainContent">
              <div>
                <h3>Role </h3>
                <p>
                  <ul> <li>Performed detailed labeling and categorization contents based on specific guidelines.</li> <li>Ensured high-quality annotations by maintaining accuracy and consistency throughout the process.</li> <li>Collaborated with teams to deliver reliable and structured data for further processing and analysis.</li> </ul>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
