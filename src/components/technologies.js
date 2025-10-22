import react from "../images/logoreact.webp";
import "../styles/Technologies.css";
import js from "../images/js.svg";
import mongo from "../images/mongo_db.svg"
import ts from "../images/ts.svg"
import node from "../images/Node.js.png"
import express from "../images/express.webp"
import mysql from "../images/mysql.svg"
import firebase from "../images/firebase.svg"
import htmlcss from "../images/html&css.png"
import jwt from "../images/jwt.png"
import cheerio from "../images/cheerio.png"
import neo4j from "../images/neo4j_logo.jpg"
import nodemailer from "../images/nodemailer.jpg"
import git from "../images/Git.svg"
import oauth from "../images/oauth.webp"
import puppeteer from "../images/puppeteer.svg"
import swagger from "../images/Swagger.svg"
import tailwind from "../images/Tailwind CSS.svg"

const techCategories = [
  {
    category: "Programming Languages",
    technologies: [
      { 
        name: "JavaScript",
        logo: js, 
        description: "Primary language used for full-stack web application development." 
      },
      { 
        name: "TypeScript", 
        logo: ts, 
        description: "Strongly-typed JavaScript for building scalable, maintainable backend systems." 
      },
    ],
  },
  {
    category: "Database Management",
    technologies: [
      { 
        name: "MySQL", 
        logo: mysql, 
        description: "Relational database system for structured data management." 
      },
      { 
        name: "MongoDB", 
        logo: mongo, 
        description: "NoSQL database for flexible and high-performance data storage." 
      },
      { 
        name: "Neo4j", 
        logo: neo4j, 
        description: "Graph database for modeling complex data relationships." 
      },
    ],
  },
  {
    category: "Backend Technologies",
    technologies: [
      { 
        name: "Node.js", 
        logo: node, 
        description: "Runtime for building fast, event-driven, and scalable backend applications." 
      },
      { 
        name: "Express.js", 
        logo: express, 
        description: "Lightweight framework for structuring RESTful APIs and server logic." 
      },
    ],
  },
  {
    category: "Frontend & UI Development",
    technologies: [
      { 
        name: "React", 
        logo: react, 
        description: "Library for building responsive and modern user interfaces." 
      },
      { 
        name: "HTML & CSS", 
        logo: htmlcss, 
        description: "Foundational technologies for structuring and styling web pages." 
      },
      { 
        name: "Tailwind CSS", 
        logo: tailwind, 
        description: "Utility-first CSS framework for building responsive layouts quickly." 
      },
    ],
  },
  {
    category: "Authentication & Security",
    technologies: [
      { 
        name: "JWT", 
        logo: jwt, 
        description: "Token-based authentication mechanism for secure communication." 
      },
      { 
        name: "Firebase Auth", 
        logo: firebase, 
        description: "Managed service for user authentication.`" 
      },
      { 
        name: "OAuth 2.0", 
        logo: oauth, 
        description: "Enables Google and Facebook secure login integration." 
      },
    ],
  },
  {
    category: "APIs & Utilities",
    technologies: [
      { 
        name: "Swagger", 
        logo: swagger, 
        description: "API documentation tool for describing and testing RESTful endpoints." 
      },
      { 
        name: "Puppeteer", 
        logo: puppeteer, 
        description: "Used for automating browser tasks and scraping real-world websites." 
      },
      { 
        name: "Cheerio", 
        logo: cheerio, 
        description: "jQuery-like syntax for parsing and extracting data from HTML." 
      },
      { 
        name: "Nodemailer", 
        logo: nodemailer, 
        description: "Library for sending emails, used in user invitations and workflows." 
      },
    ],
  },
  {
    category: "Version Control & Collaboration",
    technologies: [
      { 
        name: "Git", 
        logo: git, 
        description: "Version control system for collaborative software development." 
      },
    ],
  },
];


const TechnologiesSection = () => {
  return (
    <div className="tech-section">
      <h1>Technologies</h1>
      {techCategories.map((category, idx) => (
        <div key={idx} className="tech-category">
          <h2>{category.category}</h2>
          <div className="tech-grid">
            {category.technologies.map((tech, idx) => (
              <div className="tech-card" key={idx}>
                <img src={tech.logo} alt={tech.name} className="tech-logo" />
                <div className="tech-content">
                  <h3>{tech.name}</h3>
                  <p className="tech-content-desc">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesSection;

