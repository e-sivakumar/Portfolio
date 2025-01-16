import "../styles/Contactsection.css";
import { useState, useEffect } from "react";
import Git from '../images/Git.jpeg'
import Linkedin from '../images/Linkedin.jpeg'

const Contact = () => {

    return (
        <div id='Contactsection'>

            <h1>Contact</h1>
<div id="contactMain">
            <div id="Address">
                <h2>Address:</h2>

                <p>42,Nerhu street, Jaihindpram, Madurai-11.</p>
            </div>
            <div id="Phoneno">
                <h2>Phone no:</h2>
                <p>+91 8825500260</p>
            </div>

            <div id="Phoneno">
                <h2>E-mail:</h2>
                <p>madhankumar519@gmail.com</p>
            </div>
            <div id="contactLogo">
                <img src={Git} />
                <img src={Linkedin} />
            </div>
            </div>
        </div>



    );
};

export default Contact;