import "../styles/Project.css";
import React,{ useState, useEffect } from "react";

// const projectData = [
//   {
//     name: "Project Name 1",
//     role: "Backend Developer",
//     description: "Developed a RESTful API for a task management system using Node.js and Express.",
//     technologies: ["Node.js", "Express.js", "MySQL"],
//     responsibilities: [
//       "Developed and optimized database schemas.",
//       "Implemented user authentication and role-based access.",
//       "Integrated third-party APIs for enhanced functionality.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
//   {
//     name: "Project Name 2",
//     role: "Full-Stack Developer",
//     description: "Built an e-commerce web application using React and Firebase for real-time data handling.",
//     technologies: ["React.js", "Firebase", "HTML & CSS"],
//     responsibilities: [
//       "Designed responsive UI components.",
//       "Implemented Google SSO and email-password authentication.",
//       "Managed database queries and Firestore rules.",
//     ],
//   },
// ];

// const Project = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {projectData.map((project, index) => (
//           <div className="carousel-item" key={index}>
//             <h2>{project.name}</h2>
//             <p className="project-role">Role: {project.role}</p>
//             <p className="project-description">{project.description}</p>
//             <div className="tech-used">
//               <h3>Technologies Used:</h3>
//               <ul>
//                 {project.technologies.map((tech, idx) => (
//                   <li key={idx}>{tech}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="responsibilities">
//               <h3>Responsibilities:</h3>
//               <ul>
//                 {project.responsibilities.map((resp, idx) => (
//                   <li key={idx}>{resp}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-control prev" onClick={handlePrev}>
//         &lt;
//       </button>
//       <button className="carousel-control next" onClick={handleNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };


const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectData = [
    {
      name: "Klae",
      role: "Backend developer",
      description: "A platform for creating webpages using templates or scraping real-world websites, with easy deployment to Netlify.",
      technologies: ["Node.js", "Express.js", "Mongoose", "Passport.js", "Python", "Puppeteer", "Cheerio", "Nodemailer"],
      responsibilities: [
        "Built CRUD operations for users, teams, templates, projects, and webpages.",
"Automated email requests for new user registrations using Nodemailer.",
"Integrated Google Single Sign-On (SSO) for authentication using Passport.js.",
"Implemented website scraping using Puppeteer, Axios, and Cheerio.",
"Customized website generation based on user requirements using OpenAI."
      ],
    },
    {
      name: "Rapidloops",
      role: "Backend Developer",
      description: "Logistics tracker and management system",
      technologies: ["Node.js", "Express.js", "Sequelize"],
      responsibilities: [
        "Developed APIs with Node.js and Express.js for managing logistics data.",
        "Used Sequelize (MySQL ORM) to handle database operations effectively.",
        "Created middleware for logging, error handling, and transforming requests.",
"Documented APIs using Swagger for easy integration."
      ],
    },
    {
      name: "Atvara",
      role: "Backend Developer",
      description: "Hotel industry and inventory management.",
      technologies: ["Node.js", "Express.js", "MongoDB Client", "Firebase", "Swagger"],
      responsibilities: [
        "Built RESTful APIs with Node.js and Express.js for smooth data exchange.",
"Added JWT-based authentication and Firebase for managing users and roles.",
"Created middleware for logging, error handling, and transforming requests.",
"Documented APIs using Swagger for easy integration."
       
      ],
    },
    
  ];

  function getWindowDimensions() {
    return window.innerWidth
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
console.log("size ",  windowDimensions)

  const nextSlide = () => {
    const windowWidth = getWindowDimensions();
    if ( windowWidth > 600) {
      console.log("rotation", windowDimensions)
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && windowDimensions > 600) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };


  // useEffect(() => {
  //   const interval = setInterval(nextSlide,1500);
  //   return () => clearInterval(interval);
  // }, []);
  
  return (
    <div className="container" >
      <div className="wrapper">
        <h2 className="header">Featured Projects</h2>
        {windowDimensions > 600 && <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>}
        <div className="carousel">
          {projectData.map((project, index) => {
            let cardClass = "card";
            if (index === currentIndex) {
              cardClass += " activeCard";
            } else if (index === (currentIndex - 1 + projectData.length) % projectData.length) {
              cardClass += " prevCard";
            } else if (index === (currentIndex + 1) % projectData.length) {
              cardClass += " nextCard";
            }

            return (
              <div key={index} className={cardClass}>
                <h3 className="projectName">{project.name}</h3>
                <p className=" role">{project.role}</p>
                <p className="description">{project.description}</p>
                <div className="techContainer">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="responsibilities">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="responsibility">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        { windowDimensions > 600 && <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>}
        { windowDimensions > 600 && <div className="dots">
          {projectData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "activeDot" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Project;



// swiper

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const Project = () => {
//   const projectData = [
//     {
//       name: "Project Name 1",
//       role: "Backend Developer",
//       description: "Developed a RESTful API for a task management system using Node.js and Express.",
//       technologies: ["Node.js", "Express.js", "MySQL"],
//       responsibilities: [
//         "Developed and optimized database schemas.",
//         "Implemented user authentication and role-based access.",
//         "Integrated third-party APIs for enhanced functionality.",
//       ],
//     },
//     {
//       name: "Project Name 1",
//       role: "Backend Developer",
//       description: "Developed a RESTful API for a task management system using Node.js and Express.",
//       technologies: ["Node.js", "Express.js", "MySQL"],
//       responsibilities: [
//         "Developed and optimized database schemas.",
//         "Implemented user authentication and role-based access.",
//         "Integrated third-party APIs for enhanced functionality.",
//       ],
//     },
//     {
//       name: "Project Name 2",
//       role: "Full Stack Developer",
//       description: "E-commerce platform with real-time inventory management.",
//       technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
//       responsibilities: [
//         "Built responsive front-end interface",
//         "Implemented real-time inventory tracking",
//         "Developed secure payment integration",
//       ],
//     },
//     {
//       name: "Project Name 3",
//       role: "Frontend Developer",
//       description: "Interactive dashboard for data visualization",
//       technologies: ["React", "D3.js", "Tailwind CSS"],
//       responsibilities: [
//         "Created interactive data visualizations",
//         "Implemented responsive design",
//         "Optimized performance for large datasets",
//       ],
//     },
//   ];

//   return (
//     <div style={{ width: "80%", padding: "2rem", margin: "0 auto", background: "#1F2937", color: "white" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Featured Projects</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={50} // Spacing between slides
//         slidesPerView={2} // Number of slides visible at a time
//         navigation // Enable navigation arrows
//         pagination={{ clickable: true }} // Enable pagination dots
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
//         breakpoints={{
//           // Customize behavior for different screen sizes
//           1200: { slidesPerView: 2 },
//           1000: { slidesPerView: 2 },
//           600: { slidesPerView: 1 },
//         }}
//       >
//         {projectData.map((project, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 background: "#374151",
//                 padding: "1.5rem",
//                 borderRadius: "1rem",
//                 boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               <h3 style={{ color: "#60A5FA" }}>{project.name}</h3>
//               <p>{project.role}</p>
//               <p>{project.description}</p>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
//                 {project.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       background: "#60A5FA",
//                       color: "#1F2937",
//                       padding: "0.5rem 1rem",
//                       borderRadius: "0.5rem",
//                       width: "100%",
//                       height: "100%"
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );

// };

// export default Project;
