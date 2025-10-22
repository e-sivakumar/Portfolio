// import "../styles/Contactsection.css";
// import { useState, useEffect } from "react";
// import Git from '../images/Git.jpeg'
// import Linkedin from '../images/Linkedin.jpeg'


import "../styles/Contactsection.css";
import { useState } from "react";
import Git from '../images/Git.jpeg';
import Linkedin from '../images/Linkedin.jpeg';

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="Contactsection">
      <h1>Contact</h1>
      <div id="contactMain">
        <div id="contactContainer">
        <div id="Address" className="contact-card">
          <h2>Address:</h2>
          <p>Ahimsapuram 5th street, Sellur,<br/>Madurai, TamilNadu. </p>
        </div>
        
        <div id="Email" className="contact-card">
          <h2>E-mail:</h2>
          <p className="contact_link"> <a href="mailto:sivakumarelango15@gmail.com"> sivakumarelango15@gmail.com </a> </p>
          
        </div>
        </div>
        <div id="contactLogo">
          <img
            src={Git}
            alt="GitHub"
            onClick={()=>{window.open("https://github.com/e-sivakumar", "_blank")}}
            className={hovered === "Git" ? "hovered" : ""}
            onMouseEnter={() => setHovered("Git")}
            onMouseLeave={() => setHovered(null)}
          />
          <img
            src={Linkedin}
            alt="LinkedIn"
            onClick={()=>{window.open("https://www.linkedin.com/in/sivakumar-e-260862213/", "_blank")}}
            className={hovered === "Linkedin" ? "hovered" : ""}
            onMouseEnter={() => setHovered("Linkedin")}
            onMouseLeave={() => setHovered(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
