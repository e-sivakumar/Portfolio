import "../styles/Experience.css";
import { useState, useEffect } from "react";

const Experience = () => {
  return (
    <div>
      <section id="ExpSection">
        <div id="ExpCol">
            <h1>Experience</h1>
          <div className="expContainer">
            <h2>company</h2>
            <h4>Apr 2024 - Present</h4>
            <div id="ExpMainContent">
              <div>
                <h3>Designation </h3>
                <p> Developer </p>
              </div>
              <div>
                <h3>Role </h3>
                <p>
                  day to day work nature
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="expContainer">
            <h2>company</h2>
            <h4>Apr 2024 - Present</h4>
            <div id="ExpMainContent">
              <div>
                <h3>Designation </h3>
                <p> Developer </p>
              </div>
              <div>
                <h3>Role </h3>
                <p>
                In my React frontend development role, I specialize in UI
                  design, crafting intuitive interfaces using Figma, and styling
                  responsive layouts with CSS. I excel at implementing
                  functionality, managing application state effectively, and
                  seamlessly integrating APIs to deliver dynamic and
                  user-friendly web experiences.
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
