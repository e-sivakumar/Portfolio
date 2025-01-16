// import "../styles/TechnologiesSection.css";
// import DonutChart from "./DonutChart";
// import skillData from "../data/skillData";

// export default function TechnologiesSection() {
//   return (
//     <div>
//       <div id="frontend_development">
//       <h1>Technologies</h1>
//         {/* <div id="core_technologies">

//           <h2>Core Technologies</h2>
//           <p>HTML</p>
//           <div className="skill_container">
//             <div className="skills html">90%</div>
//           </div>
//           <p>CSS</p>
//           <div className="skill_container">
//             <div className="skills css">70%</div>
//           </div>
//           <p>JAVASCRIPT</p>
//           <div className="skill_container">
//             <div className="skills js">80%</div>
//           </div>
//         </div> */}

// <div className="chart-container">
//       {skillData.map((skill, index) => (
//         <div>
//           <h3 className="skillTitle">{skill.label}</h3>
//         <DonutChart
//           key={index}
//           chartId={`skillChart${index}`}
//           label={skill.label}
//           percentage={skill.percentage}
//           color={skill.color}
//         />
//         </div>
//       ))}
//       <div></div>
//     </div>

// </div>
//     </div>
//   );
// }

import logo from "../images/logoreact.webp";
import "../styles/Technologies.css";

// const technologies = [
//   { name: "JavaScript", logo: logo, description: "Versatile scripting language for web development." },
//   { name: "TypeScript", logo: logo, description: "JavaScript with static typing for scalable projects." },
//   { name: "MySQL", logo: logo, description: "Relational database management system." },
//   { name: "MongoDB", logo: logo, description: "NoSQL database for modern applications." },
//   { name: "Node.js", logo: logo, description: "Backend runtime environment for JavaScript." },
//   { name: "React", logo: logo, description: "Library for building responsive user interfaces." },
//   { name: "JWT", logo: logo, description: "Secure token-based authentication." },
//   { name: "Firebase", logo: logo, description: "Authentication and backend services." },
// ];

// const TechnologiesSection = () => {
//   return (
//     <div className="tech-section">
//       <h1>Technologies</h1>
//       <div className="tech-grid">
//         {technologies.map((tech, idx) => (
//           <div className="tech-card" key={idx}>
//             <img src={`${tech.logo}`} alt={tech.name} className="tech-logo" />
//             <div className="tech-content">
//               <h2>{tech.name}</h2>
//               <p>{tech.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//code here

// const techCategories = [
//   {
//     category: "Programming Languages",
//     technologies: [
//       { name: "JavaScript", logo: "js-logo.png", description: "Versatile scripting language." },
//       { name: "TypeScript", logo: "ts-logo.png", description: "JavaScript with static typing." },
//     ],
//   },
//   {
//     category: "Database Management",
//     technologies: [
//       { name: "MySQL", logo: "mysql-logo.png", description: "Relational database system." },
//       { name: "MongoDB", logo: "mongodb-logo.png", description: "NoSQL database." },
//     ],
//   },
//   {
//     category: "Backend Technologies",
//     technologies: [
//       { name: "Node.js", logo: "nodejs-logo.png", description: "Server-side runtime." },
//       { name: "Express.js", logo: "express-logo.png", description: "Web application framework." },
//     ],
//   },
//   {
//     category: "Web Technologies",
//     technologies: [
//       { name: "React", logo: "react-logo.png", description: "UI library for frontend development." },
//       { name: "HTML & CSS", logo: "html-css-logo.png", description: "Core web technologies." },
//     ],
//   },
//   {
//     category: "Authentication & Security",
//     technologies: [
//       { name: "JWT", logo: "jwt-logo.png", description: "Secure token-based authentication." },
//       { name: "Firebase Auth", logo: "firebase-logo.png", description: "Authentication service." },
//       { name: "Google SSO", logo: "google-logo.png", description: "Single sign-on using Passport.js." },
//     ],
//   },
// ];

const techCategories = [
  {
    category: "Programming Languages",
    technologies: [
      { 
        name: "JavaScript", 
        logo: "js-logo.png", 
        description: "Versatile scripting language used for both frontend and backend development." 
      },
      { 
        name: "TypeScript", 
        logo: "ts-logo.png", 
        description: "JavaScript with static typing for large-scale application development." 
      },
    ],
  },
  {
    category: "Database Management",
    technologies: [
      { 
        name: "MySQL", 
        logo: "mysql-logo.png", 
        description: "Relational database system for structured data management." 
      },
      { 
        name: "MongoDB", 
        logo: "mongodb-logo.png", 
        description: "NoSQL database designed for scalability and flexibility." 
      },
    ],
  },
  {
    category: "Backend Technologies",
    technologies: [
      { 
        name: "Node.js", 
        logo: "nodejs-logo.png", 
        description: "JavaScript runtime for building scalable server-side applications." 
      },
      { 
        name: "Express.js", 
        logo: "express-logo.png", 
        description: "Fast, unopinionated framework for Node.js web applications." 
      },
    ],
  },
  {
    category: "Web Technologies",
    technologies: [
      { 
        name: "React", 
        logo: "react-logo.png", 
        description: "Library for building interactive user interfaces." 
      },
      { 
        name: "HTML & CSS", 
        logo: "html-css-logo.png", 
        description: "Foundational technologies for structuring and styling web pages." 
      },
    ],
  },
  {
    category: "Authentication & Security",
    technologies: [
      { 
        name: "JWT", 
        logo: "jwt-logo.png", 
        description: "Token-based authentication mechanism for secure communication." 
      },
      { 
        name: "Firebase Auth", 
        logo: "firebase-logo.png", 
        description: "Managed service for user authentication.`" 
      },
      { 
        name: "Google SSO", 
        logo: "google-logo.png", 
        description: "Single sign-on service for seamless authentication." 
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
                <img src={logo} alt={tech.name} className="tech-logo" />
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

// hey here

// import React from 'react';

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#111827',
//     padding: '2rem',
//     color: 'white',
//   },
//   wrapper: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   header: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     marginBottom: '2rem',
//     color: 'white',
//   },
//   intro: {
//     fontSize: '1.125rem',
//     color: '#D1D5DB',
//     marginBottom: '3rem',
//   },
//   categorySection: {
//     marginBottom: '3rem',
//   },
//   categoryHeader: {
//     fontSize: '1.75rem',
//     fontWeight: '600',
//     color: '#60A5FA',
//     marginBottom: '1.5rem',
//     paddingBottom: '0.5rem',
//     borderBottom: '2px solid #374151',
//   },
//   techGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '1.5rem',
//   },
//   techCard: {
//     backgroundColor: '#1F2937',
//     padding: '1.5rem',
//     borderRadius: '0.5rem',
//     border: '1px solid #374151',
//     transition: 'all 0.3s ease',
//     height: '200px', // Fixed height for consistency
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   techHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     marginBottom: '1rem',
//   },
//   logoContainer: {
//     width: '48px',
//     height: '48px',
//     flexShrink: 0, // Prevent logo from shrinking
//     backgroundColor: '#111827',
//     borderRadius: '0.5rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   techName: {
//     fontSize: '1.25rem',
//     fontWeight: '600',
//     margin: 0,
//     color: '#F3F4F6',
//   },
//   techDescription: {
//     color: '#9CA3AF',
//     fontSize: '0.95rem',
//     lineHeight: '1.5',
//     overflow: 'hidden',
//     display: '-webkit-box',
//     WebkitLineClamp: '2',
//     WebkitBoxOrient: 'vertical',
//     margin: 0,
//   },
//   learnMore: {
//     color: '#60A5FA',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     cursor: 'pointer',
//     fontSize: '0.875rem',
//     marginTop: 'auto', // Push to bottom
//     width: 'fit-content',
//   },
//   footer: {
//     textAlign: 'center',
//     color: '#9CA3AF',
//     marginTop: '4rem',
//     paddingTop: '2rem',
//     borderTop: '1px solid #374151',
//   },
// };

// const TechnologiesSection = () => {
//   const techCategories = [
//     {
//       category: "Programming Languages",
//       technologies: [
//         { name: "JavaScript", logo: "js-logo.png", description: "Versatile scripting language for web development, supporting both frontend and backend development with extensive ecosystem." },
//         { name: "TypeScript", logo: "ts-logo.png", description: "Strongly typed programming language that builds on JavaScript, adding optional static types for enhanced development experience." },
//       ],
//     },
//     {
//       category: "Database Management",
//       technologies: [
//         { name: "MySQL", logo: "mysql-logo.png", description: "Popular open-source relational database management system, ideal for structured data and complex queries." },
//         { name: "MongoDB", logo: "mongodb-logo.png", description: "Modern NoSQL database offering flexibility with JSON-like documents and powerful querying capabilities." },
//       ],
//     },
//     {
//       category: "Backend Technologies",
//       technologies: [
//         { name: "Node.js", logo: "nodejs-logo.png", description: "JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side development with JavaScript." },
//         { name: "Express.js", logo: "express-logo.png", description: "Fast, unopinionated web framework for Node.js, providing robust features for web applications." },
//       ],
//     },
//     {
//       category: "Web Technologies",
//       technologies: [
//         { name: "React", logo: "react-logo.png", description: "JavaScript library for building user interfaces with component-based architecture and virtual DOM." },
//         { name: "HTML & CSS", logo: "html-css-logo.png", description: "Fundamental web technologies for structuring content and styling web applications." },
//       ],
//     },
//     {
//       category: "Authentication & Security",
//       technologies: [
//         { name: "JWT", logo: "jwt-logo.png", description: "JSON Web Tokens for secure information transmission and user authentication in web applications." },
//         { name: "Firebase Auth", logo: "firebase-logo.png", description: "Complete authentication solution with multiple providers and security features." },
//         { name: "Google SSO", logo: "google-logo.png", description: "Single Sign-On implementation using Google's OAuth 2.0 protocol for seamless authentication." },
//       ],
//     },
//   ];

//   const ExternalLinkIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//       <polyline points="15 3 21 3 21 9" />
//       <line x1="10" y1="14" x2="21" y2="3" />
//     </svg>
//   );

//   return (
//     <div style={styles.container}>
//       <div style={styles.wrapper}>
//         <h1 style={styles.header}>Technical Skills</h1>

//         <div style={styles.intro}>
//           Here's an overview of the technologies I work with, showcasing my expertise across different areas of software development.
//         </div>

//         {techCategories.map((category) => (
//           <div key={category.category} style={styles.categorySection}>
//             <h2 style={styles.categoryHeader}>{category.category}</h2>
//             <div style={styles.techGrid}>
//               {category.technologies.map((tech) => (
//                 <div
//                   key={tech.name}
//                   style={styles.techCard}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-4px)';
//                     e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}
//                 >
//                   <div>
//                     <div style={styles.techHeader}>
//                       <div style={styles.logoContainer}>
//                         <img
//                           src={`/api/placeholder/48/48`}
//                           alt={`${tech.name} logo`}
//                           style={{ width: '32px', height: '32px', objectFit: 'contain' }}
//                         />
//                       </div>
//                       <h3 style={styles.techName}>{tech.name}</h3>
//                     </div>
//                     <p style={styles.techDescription}>{tech.description}</p>
//                   </div>

//                   <div style={styles.learnMore}>
//                     <ExternalLinkIcon />
//                     <span>Learn more</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div style={styles.footer}>
//           <p>Always learning and expanding my technical expertise.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechnologiesSection;




