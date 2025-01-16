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
      name: "Project Name 1",
      role: "Backend Developer",
      description: "Developed a RESTful API for a task management system using Node.js and Express.",
      technologies: ["Node.js", "Express.js", "MySQL"],
      responsibilities: [
        "Developed and optimized database schemas.",
        "Implemented user authentication and role-based access.",
        "Integrated third-party APIs for enhanced functionality.",
      ],
    },
    {
      name: "Project Name 2",
      role: "Full Stack Developer",
      description: "E-commerce platform with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      responsibilities: [
        "Built responsive front-end interface",
        "Implemented real-time inventory tracking",
        "Developed secure payment integration",
      ],
    },
    {
      name: "Project Name 3",
      role: "Frontend Developer",
      description: "Interactive dashboard for data visualization",
      technologies: ["React", "D3.js", "Tailwind CSS"],
      responsibilities: [
        "Created interactive data visualizations",
        "Implemented responsive design",
        "Optimized performance for large datasets",
      ],
    },
  ];

  const styles = {
    container: {
      // padding: '3rem 1rem',
      width: "100%",
      color: 'white',
      height: "100vh"
    },
    wrapper: {
      maxWidth: '100%',
      margin: '0 auto',
      position: 'relative',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#F3F4F6',
    },
    carousel: {
      display: 'flex',
      position: 'relative',
      minHeight: '500px',
      perspective: '1000px',
      overflow: 'hidden',
      justifyContent: "center"
    },
    card: {
      position: 'absolute', // Cards don't affect layout
      width: '60%',
      padding: '2rem',
      backgroundColor: '#1F2937',
      borderRadius: '1rem',
      border: '1px solid #374151',
      transition: 'all 0.5s ease-in-out',
      opacity: 0.5,
      
      transform: 'translateX(100%) scale(0.8)',
    },
    activeCard: {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
      zIndex: 2,
    },
    prevCard: {
      opacity: 0.7,
      transform: 'translateX(-25%) scale(0.9)',
      zIndex: 1,
    },
    nextCard: {
      opacity: 0.7,
      transform: 'translateX(25%) scale(0.9)',
      zIndex: 1,
    },
    projectName: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#60A5FA',
      marginBottom: '0.5rem',
    },
    role: {
      fontSize: '1.25rem',
      color: '#D1D5DB',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.1rem',
      color: '#F3F4F6',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    techContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    tech: {
      backgroundColor: '#374151',
      padding: '0.5rem 1rem',
      borderRadius: '1rem',
      fontSize: '0.9rem',
      color: '#60A5FA',
    },
    responsibilities: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    responsibility: {
      marginBottom: '0.75rem',
      paddingLeft: '1.5rem',
      position: 'relative',
      lineHeight: '1.5',
      color: '#D1D5DB',
    },
    bullet: {
      position: 'absolute',
      left: 0,
      color: '#60A5FA',
    },
    controls: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    button: {
      backgroundColor: '#374151',
      border: 'none',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#374151',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeDot: {
      backgroundColor: '#60A5FA',
      transform: 'scale(1.2)',
    },
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.header}>Featured Projects</h2>

        <div style={{...styles.carousel}}>
          {projectData.map((project, index) => {
            let cardStyle = { ...styles.card };
            if (index === currentIndex) {
              cardStyle = { ...cardStyle, ...styles.activeCard, };
            } else if (index === (currentIndex - 1 + projectData.length) % projectData.length) {
              cardStyle = { ...cardStyle, ...styles.prevCard  };
            } else if (index === (currentIndex + 1) % projectData.length) {
              cardStyle = { ...cardStyle, ...styles.nextCard };
            }

            return (
              <div key={index} style={cardStyle}>
                <h3 style={styles.projectName}>{project.name}</h3>
                <p style={styles.role}>{project.role}</p>
                <p style={styles.description}>{project.description}</p>
                
                <div style={styles.techContainer}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={styles.tech}>{tech}</span>
                  ))}
                </div>

                <ul style={styles.responsibilities}>
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} style={styles.responsibility}>
                      <span style={styles.bullet}>•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={styles.controls}>
          <button 
            style={{
              ...styles.button,
              opacity: isAnimating ? 0.7 : 1,
            }} 
            onClick={prevSlide}
            disabled={isAnimating}
          >
            Previous
          </button>
          <button 
            style={{
              ...styles.button,
              opacity: isAnimating ? 0.7 : 1,
            }} 
            onClick={nextSlide}
            disabled={isAnimating}
          >
            Next
          </button>
        </div>

        <div style={styles.dots}>
          {projectData.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentIndex ? styles.activeDot : {}),
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
