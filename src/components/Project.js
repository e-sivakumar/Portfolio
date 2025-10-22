// import "../styles/Project.css";
// import React,{ useState, useEffect } from "react";

// const Project = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const projectData = [
//     {
//       name: "Klae",
//       role: "Backend developer",
//       description: "A platform for creating webpages using templates or scraping real-world websites, with easy deployment to Netlify.",
//       technologies: ["Node.js", "Express.js", "Mongoose", "Passport.js", "Python", "Puppeteer", "Cheerio", "Nodemailer"],
//       responsibilities: [
//         "Built CRUD operations for users, teams, templates, projects, and webpages.",
// "Automated email requests for new user registrations using Nodemailer.",
// "Integrated Google Single Sign-On (SSO) for authentication using Passport.js.",
// "Implemented website scraping using Puppeteer, Axios, and Cheerio.",
// "Customized website generation based on user requirements using OpenAI."
//       ],
//     },
//     {
//       name: "Rapidloops",
//       role: "Backend Developer",
//       description: "Logistics tracker and management system",
//       technologies: ["Node.js", "Express.js", "Sequelize"],
//       responsibilities: [
//         "Developed APIs with Node.js and Express.js for managing logistics data.",
//         "Used Sequelize (MySQL ORM) to handle database operations effectively.",
//         "Created middleware for logging, error handling, and transforming requests.",
// "Documented APIs using Swagger for easy integration."
//       ],
//     },
//     {
//       name: "Atvara",
//       role: "Backend Developer",
//       description: "Hotel industry and inventory management.",
//       technologies: ["Node.js", "Express.js", "MongoDB Client", "Firebase", "Swagger"],
//       responsibilities: [
//         "Built RESTful APIs with Node.js and Express.js for smooth data exchange.",
// "Added JWT-based authentication and Firebase for managing users and roles.",
// "Created middleware for logging, error handling, and transforming requests.",
// "Documented APIs using Swagger for easy integration."

//       ],
//     },

//   ];

//   function getWindowDimensions() {
//     return window.innerWidth;
//   }

//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Reset currentIndex if it's out of bounds when projectData changes
//   useEffect(() => {
//     if (currentIndex >= projectData.length) {
//       setCurrentIndex(0);
//     }
//   }, [projectData.length, currentIndex]);

//   const nextSlide = () => {
//     if (projectData.length <= 1) return;
//     const windowWidth = getWindowDimensions();
//     if (windowWidth > 750 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev + 1) % projectData.length);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (projectData.length <= 1) return;
//     if (!isAnimating && windowDimensions > 750) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   // useEffect(() => {
//   //   const interval = setInterval(nextSlide,1500);
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="container" >
//       <div className="wrapper">
//         <h2 className="header">Featured Projects</h2>
//         {windowDimensions > 750 && projectData.length > 1 && (
//           <button className="arrow left" onClick={prevSlide}>
//             &#8592;
//           </button>
//         )}
//         <div className="carousel">
//           {projectData.map((project, index) => {
//             let cardClass = "card";

//             // Handle different project counts
//             if (projectData.length === 1) {
//               cardClass += " activeCard";
//             } else if (projectData.length === 2) {
//               if (index === currentIndex) {
//                 cardClass += " activeCard";
//               } else {
//                 cardClass += " prevCard";
//               }
//             } else {
//               // For 3+ projects, use the original logic
//               if (index === currentIndex) {
//                 cardClass += " activeCard";
//               } else if (index === (currentIndex - 1 + projectData.length) % projectData.length) {
//                 cardClass += " prevCard";
//               } else if (index === (currentIndex + 1) % projectData.length) {
//                 cardClass += " nextCard";
//               }
//             }

//             return (
//               <div key={index} className={cardClass}>
//                 <h3 className="projectName">{project.name}</h3>
//                 <p className="role">{project.role}</p>
//                 <p className="description">{project.description}</p>
//                 <div className="techContainer">
//                   {project.technologies.map((tech, i) => (
//                     <span key={i} className="tech">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <ul className="responsibilities">
//                   {project.responsibilities.map((resp, i) => (
//                     <li key={i} className="responsibility">
//                       {resp}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//         {windowDimensions > 750 && projectData.length > 1 && (
//           <button className="arrow right" onClick={nextSlide}>
//             &#8594;
//           </button>
//         )}
//         {windowDimensions > 750 && projectData.length > 1 && (
//           <div className="dots">
//             {projectData.map((_, index) => (
//               <div
//                 key={index}
//                 className={`dot ${index === currentIndex ? "activeDot" : ""}`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Project;

import React, { useState, useEffect } from "react";
import "../styles/Project.css";
import projectSvg from "../images/project-svg.svg"

export default function Projects({ projects: propProjects }) {
  // const defaultProjects = [
  //   {
  //     id: "p1",
  //     name: "Klae — Page Builder",
  //     role: "Backend / Platform",
  //     images: [node], // add URLs like ['...1.jpg','...2.jpg'] to test
  //     icon: node,
  //     description:
  //       "A lightweight page builder that supports templates and scraping. Fast rendering and easy templating pipeline.",
  //     longDescription:
  //       "Klae is a modular page builder designed to let users compose pages from templates or scraped content. The backend handles rendering, template storage, and serving optimized HTML/CSS for speed.",
  //     technologies: ["Node.js", "Express", "Mongoose", "Puppeteer", "Redis","Node.js", "Express", "Mongoose", "Puppeteer", "Redis"],
  //     responsibilities: [
  //       "Design & implement RESTful APIs",
  //       "Build scraping microservice",
  //       "Implement caching & job queue",
  //     ],
  //     links: { live: "#", repo: "#" },
  //   },
  //   {
  //     id: "p2",
  //     name: "Realtime Chat",
  //     role: "Fullstack",
  //     images: [],
  //     icon: "",
  //     description: "Socket-powered chat with rooms, presence, and message persistence.",
  //     longDescription:
  //       "Realtime Chat supports messaging, presence, typing indicators and offline sync. Optimized for many concurrent connections.",
  //     technologies: ["Socket.io", "React", "Redis"],
  //     responsibilities: ["Socket event design", "Message persistence", "Presence & typing"],
  //     links: { live: "#", repo: "#" },
  //   },
  // ];

  // const projects = propProjects || defaultProjects;

  // // modal state
  // const [open, setOpen] = useState(false);
  // const [active, setActive] = useState(null);

  // // image index inside modal (simple integer)
  // const [imgIndex, setImgIndex] = useState(0);

  // function openModal(p) {
  //   setActive(p);
  //   setImgIndex(0);
  //   setOpen(true);
  //   document.body.style.overflow = "hidden"; // lock background scroll
  // }
  // function closeModal() {
  //   setOpen(false);
  //   setActive(null);
  //   document.body.style.overflow = "";
  // }

  // // allow Escape to close modal (lightweight)
  // useEffect(() => {
  //   function onKey(e) {
  //     if (e.key === "Escape" && open) closeModal();
  //   }
  //   window.addEventListener("keydown", onKey);
  //   return () => window.removeEventListener("keydown", onKey);
  // }, [open]);

  // // simple next/prev for images (wrap-around)
  // function nextImage() {
  //   const n = active?.images?.length || 0;
  //   if (n === 0) return;
  //   setImgIndex((s) => (s + 1) % n);
  // }
  // function prevImage() {
  //   const n = active?.images?.length || 0;
  //   if (n === 0) return;
  //   setImgIndex((s) => (s - 1 + n) % n);
  // }

  // // placeholder SVG when image missing (small component)
  // function Placeholder({ title, icon }) {
  //   return (
  //     <div className="cover-placeholder" aria-hidden="true">
  //       {/* <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ marginRight: 12 }}>
  //         <rect width="24" height="24" rx="6" fill="white" opacity="0.12" />
  //         <path d="M7 13l3 3 7-9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  //       </svg> */}
  //       <img style={{height:"50px", width:"50px", marginRight:"5px"}} src={icon ? icon : projectSvg}/>
  //       <div>
  //         <div style={{ fontWeight: 700 }}>{title}</div>
  //         <div style={{ fontSize: 12, opacity: 0.95 }}>Project</div>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="projects-wrap">
  //     <header className="projects-header">
  //       <div>
  //         <h1 style={{ margin: 0 }}>Projects</h1>
  //       </div>
  //     </header>

  //     <main>
  //       <section className="projects-grid" aria-live="polite">
  //         {projects.map((p) => (
  //           <article
  //             key={p.id}
  //             tabIndex={0}
  //             role="button"
  //             className="project-card"
  //             onClick={(e) => {
  //               if (e.target.closest("a")) return; // let links work normally
  //               openModal(p);
  //             }}
  //             onKeyDown={(e) => {
  //               if (e.key === "Enter" || e.key === " ") {
  //                 e.preventDefault();
  //                 openModal(p);
  //               }
  //             }}
  //           >
  //             {p.images && p.images.length > 0 ? (
  //               <div
  //                 className="card-cover"
  //                 style={{ backgroundImage: `url('${p.images[0]}')`, objectFit:"contain" }}
  //                 aria-hidden
  //               />
  //             ) : (
  //               <Placeholder title={p.name} icon={p.icon}  />
  //             )}

  //             <div className="card-body">
  //               <div>
  //                 <div style={{ fontWeight: 700 }}>{p.name}</div>
  //                 <div style={{ fontSize: ".86rem", color: "var(--muted)", marginTop: 4 }}>{p.role}</div>
  //               </div>

  //               <p className="card-desc">{p.description}</p>

  //               <div className="card-chips" aria-hidden>
  //                 {p.technologies?.map((t, i) => (
  //                   <span className="chip" key={i}>
  //                     {t}
  //                   </span>
  //                 ))}
  //               </div>

  //               <div className="card-footer" style={{ marginTop: 8 }}>
  //                 <a className="btn ghost" href={p.links?.repo || "#"} target="_blank" rel="noreferrer">
  //                   Code
  //                 </a>
  //               </div>
  //             </div>
  //           </article>
  //         ))}
  //       </section>
  //     </main>

  //     {/* modal */}
  //     {open && active && (
  //       <div
  //         className="modal open"
  //         role="dialog"
  //         aria-modal="true"
  //         aria-labelledby="modal-title"
  //         onClick={(e) => {
  //           if (e.target === e.currentTarget) closeModal();
  //         }}
  //       >
  //         <div className="modal-card" role="document">
  //           <div className="modal-header">
  //             <div>
  //               <h2 id="modal-title" className="modal-title">
  //                 {active.name}
  //               </h2>
  //               <div id="modal-role" className="modal-role">
  //                 {active.role}
  //               </div>
  //             </div>
  //             <div>
  //               <button className="close-btn" aria-label="Close" onClick={closeModal}>
  //                 ✕
  //               </button>
  //             </div>
  //           </div>

  //           <div className="modal-body" id="modal-body" tabIndex={0}>
  //             {/* Simple image area: either one image, multiple images with basic prev/next buttons, or placeholder */}
  //             <div style={{ marginBottom: 12 }}>
  //               {active.images && active.images.length > 0 ? (
  //                 <div>
  //                   <div style={{ position: "relative" }}>
  //                     <img
  //                       src={active.images[imgIndex]}
  //                       alt={`${active.name} ${imgIndex + 1}`}
  //                       style={{ width: "100%", maxHeight: 360, objectFit: "cover", borderRadius: 8 }}
  //                       loading="lazy"
  //                     />
  //                     {active.images.length > 1 && (
  //                       <>
  //                         <button
  //                           onClick={(e) => {
  //                             e.stopPropagation();
  //                             prevImage();
  //                           }}
  //                           className="ctrl"
  //                           style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}
  //                           aria-label="Previous"
  //                         >
  //                           ◀
  //                         </button>
  //                         <button
  //                           onClick={(e) => {
  //                             e.stopPropagation();
  //                             nextImage();
  //                           }}
  //                           className="ctrl"
  //                           style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
  //                           aria-label="Next"
  //                         >
  //                           ▶
  //                         </button>
  //                       </>
  //                     )}
  //                   </div>

  //                   {/* simple dots */}
  //                   {active.images.length > 1 && (
  //                     <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}>
  //                       {active.images.map((_, i) => (
  //                         <button
  //                           key={i}
  //                           onClick={(e) => {
  //                             e.stopPropagation();
  //                             setImgIndex(i);
  //                           }}
  //                           aria-pressed={i === imgIndex}
  //                           style={{
  //                             width: 10,
  //                             height: 10,
  //                             borderRadius: "50%",
  //                             border: "none",
  //                             background: i === imgIndex ? "linear-gradient(90deg,#ff6a8a,#6a8bff)" : "rgba(255,255,255,0.12)",
  //                             cursor: "pointer",
  //                           }}
  //                           aria-label={`Go to image ${i + 1}`}
  //                         />
  //                       ))}
  //                     </div>
  //                   )}
  //                 </div>
  //               ) : (
  //                 <div className="carousel-placeholder" style={{ borderRadius: 8 }}>
  //                   <strong>{active.name}</strong>
  //                 </div>
  //               )}
  //             </div>

  //             <p>{active.longDescription || active.description}</p>

  //             <h4 style={{ marginTop: 12 }}>Responsibilities</h4>
  //             <ul>
  //               {active.responsibilities?.map((r, i) => (
  //                 <li key={i}>{r}</li>
  //               ))}
  //             </ul>

  //             <h4>Technologies</h4>
  //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
  //               {active.technologies?.map((t, i) => (
  //                 <span className="chip" key={i}>
  //                   {t}
  //                 </span>
  //               ))}
  //             </div>

  //             <div className="modal-actions" style={{ marginTop: 18 }}>
  //               <a className="btn" href={active.links?.live || "#"} target="_blank" rel="noreferrer">
  //                 Live demo
  //               </a>
  //               <a className="btn ghost" href={active.links?.repo || "#"} target="_blank" rel="noreferrer">
  //                 View code
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
  

  // const defaultProjects = [
  //   {
  //     id: "p1",
  //     name: "Klae — Page Builder",
  //     role: "Backend / Platform",
  //     images: [node, jwt, cheerio, nodemailer],
  //     icon: node,
  //     description:
  //       "A lightweight page builder that supports templates and scraping. Fast rendering and easy templating pipeline.",
  //     longDescription:
  //       "Klae is a modular page builder designed to let users compose pages from templates or scraped content. The backend handles rendering, template storage, and serving optimized HTML/CSS for speed.",
  //     technologies: [
  //       "Node.js",
  //       "Express",
  //       "Mongoose",
  //       "Puppeteer",
  //       "Redis",
  //       "GraphQL",
  //       "TypeScript",
  //     ],
  //     responsibilities: [
  //       "Design & implement RESTful APIs",
  //       "Build scraping microservice",
  //       "Implement caching & job queue",
  //     ],
  //     links: { live: "#", repo: "#" },
  //   },
  //   {
  //     id: "p2",
  //     name: "Realtime Chat",
  //     role: "Fullstack",
  //     images: [],
  //     icon: "",
  //     description: "Socket-powered chat with rooms, presence, and message persistence.",
  //     longDescription:
  //       "Realtime Chat supports messaging, presence, typing indicators and offline sync. Optimized for many concurrent connections.",
  //     technologies: ["Socket.io", "React", "Redis"],
  //     responsibilities: ["Socket event design", "Message persistence", "Presence & typing"],
  //     links: { /* no live link - tests optional UI */ repo: "" },
  //   },
  // ];
  
  const defaultProjects = [
    {
      id: "p1",
      name: "Mela — Brand Collaboration Platform",
      role: "MERN Stack Developer",
      images: [],
      icon: null,
      description:
        "An influencer marketing and brand collaboration platform connecting creators and brands with AI-based recommendations and campaign management.",
      longDescription:
        "Mela is a full-scale collaboration platform that bridges brands and content creators. It supports AI-powered creator discovery, campaign tracking, messaging, and secure payments. I contributed to both frontend and backend development — building responsive React components, integrating Firebase authentication, developing APIs, and implementing AI-based creator search using MongoDB vector indexing.",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "TypeScript",
        "MongoDB",
        "Graph Database",
        "Firebase",
        "Azure Blob Storage",
      ],
      responsibilities: [
        "Developed REST APIs for campaign, user, and payment management.",
        "Integrated Firebase authentication with Google, Facebook, and Email.",
        "Built and styled responsive React components for campaign dashboards.",
        "Managed app-wide state using Redux for optimized data flow.",
        "Implemented AI-based creator discovery using MongoDB Atlas Search.",
        "Configured Azure Blob Storage for media uploads with signed URLs.",
        "Set up Winston + Kibana for backend logging and monitoring.",
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "p2",
      name: "Klae AI — Website Builder",
      role: "Backend Developer",
      images: [],
      icon: null,
      description:
        "An AI-driven web builder that scrapes, edits, and deploys websites instantly with team collaboration and template-based customization.",
      longDescription:
        "Klae AI lets users recreate or design websites using intelligent scraping, template composition, and AI-assisted editing. The platform supports organization-level collaboration, real-time page editing, and automated deployment pipelines. I built the backend architecture, implemented Puppeteer-based scraping, and handled media workflows via AWS S3 signed URLs.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Puppeteer",
        "Cheerio",
        "Passport.js",
        "AWS S3",
        "Nodemailer",
        "OpenAI API",
      ],
      responsibilities: [
        "Built scraping and content reconstruction modules with Puppeteer and Cheerio.",
        "Integrated Google SSO using Passport.js and managed user sessions.",
        "Automated onboarding and notifications through Nodemailer.",
        "Handled file uploads and retrieval via AWS S3 signed URLs.",
        "Implemented AI-based content generation with OpenAI API.",
        "Created APIs for collaborative template management and deployment.",
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "p3",
      name: "Atvara — Hotel & Inventory Management",
      role: "Backend Developer",
      images: [],
      icon: null,
      description:
        "A multi-branch hotel and restaurant management platform handling stock, procurement, waste tracking, and reporting operations.",
      longDescription:
        "Atvara simplifies hotel and restaurant operations by managing procurement, stock transfers, waste, and expense reporting across multiple branches. I built backend APIs for these workflows, implemented Firebase authentication, and designed role-based access for different user levels.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase Auth",
        "AWS S3",
        "Swagger",
        "Winston",
      ],
      responsibilities: [
        "Developed REST APIs for procurement, transfer, and stock management.",
        "Implemented Firebase authentication with JWT-based role handling.",
        "Used AWS S3 signed URLs for uploading and retrieving invoices securely.",
        "Configured Winston for error logging and system auditing.",
        "Added approval and verification flows for administrative actions.",
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "p4",
      name: "Rapidloops — Logistics Tracker",
      role: "Backend Developer",
      images: [],
      icon: null,
      description:
        "A logistics management system for tracking shipments, driver assignments, and billing workflows.",
      longDescription:
        "Rapidloops is a logistics and shipment management platform that automates shipment creation, trucker assignment, and billing updates. I developed APIs using Node.js and Express, designed relational models in Sequelize, and integrated Firebase authentication for secure access.",
      technologies: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "Firebase",
        "Swagger",
        "Winston",
      ],
      responsibilities: [
        "Designed APIs for shipment booking, billing, and assignment workflows.",
        "Created relational models for logistics data using Sequelize ORM.",
        "Implemented Firebase authentication and access control middleware.",
        "Logged API activities using Winston and documented endpoints in Swagger.",
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "p5",
      name: "PA-CPT Code Scraper",
      role: "Backend Developer",
      images: [],
      icon: null,
      description:
        "Automated system for extracting and validating CPT medical codes from PDFs and websites using AI.",
      longDescription:
        "The PA-CPT Code Scraper automates extraction and validation of medical CPT codes from PDFs and web pages. I integrated Node.js and Python microservices for parsing, validation, and storage. The system uses OpenAI for intelligent verification and Azure Blob Storage for secure data handling.",
      technologies: [
        "Node.js",
        "Express",
        "TypeScript",
        "Python Flask",
        "MSSQL",
        "Azure Storage",
        "OpenAI API",
      ],
      responsibilities: [
        "Integrated Python Flask microservice for text extraction and validation.",
        "Implemented AI-based verification using OpenAI API.",
        "Stored parsed data securely in MSSQL and Azure Blob Storage.",
        "Created schedulers for periodic scraping and data refresh.",
      ],
      links: { live: "#", repo: "#" },
    },
  ];
  

  const projects = propProjects || defaultProjects;

  // modal state
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  function openModal(p) {
    setActive(p);
    setImgIndex(0);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = "";
  }

  // Escape to close (lightweight)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function nextImage() {
    const n = active?.images?.length || 0;
    if (n === 0) return;
    setImgIndex((s) => (s + 1) % n);
  }
  function prevImage() {
    const n = active?.images?.length || 0;
    if (n === 0) return;
    setImgIndex((s) => (s - 1 + n) % n);
  }

  // placeholder component
  function Placeholder({ title, icon }) {
    return (
      <div className="cover-placeholder" aria-hidden="true">
        <img
          src={icon || projectSvg}
          alt=""
          style={{ height: 48, width: 48, marginRight: 10, objectFit: "contain" }}
        />
        <div>
          <div style={{ fontWeight: 700 }}>{title}</div>
          <div style={{ fontSize: 12, opacity: 0.95 }}>Project</div>
        </div>
      </div>
    );
  }

  // limit chips to maxChips (show +N if more)
  const maxChips = 4;
  function renderChips(techs = []) {
    const shown = techs.slice(0, maxChips);
    const extra = techs.length - shown.length;
    return (
      <>
        {shown.map((t, i) => (
          <span className="chip" key={i}>
            {t}
          </span>
        ))}
        {extra > 0 && (
          <span className="chip extra" key="more">+{extra}</span>
        )}
      </>
    );
  }

  return (
    <div className="projects-wrap">
      <header className="projects-header">
        <div>
          <h1 style={{ margin: 0 }}>Projects</h1>
        </div>
      </header>

      <main>
        <section className="projects-grid" aria-live="polite">
          {projects.map((p) => (
            <article
              key={p.id}
              tabIndex={0}
              role="button"
              className="project-card"
              onClick={(e) => {
                if (e.target.closest("a")) return;
                openModal(p);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(p);
                }
              }}
            >
              {p.images && p.images.length > 0 ? (
                <div
                  className="card-cover"
                  style={{
                    backgroundImage: `url('${p.images[0]}')`,
                  }}
                  aria-hidden
                />
              ) : (
                <Placeholder title={p.name} icon={p.icon} />
              )}

              <div className="card-body">
                <div>
                  <div style={{ fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: ".86rem", color: "var(--muted)", marginTop: 4 }}>{p.role}</div>
                </div>

                {/* clamped description - same height across cards */}
                <p className="card-desc">{p.description}</p>

                {/* chips - fixed occupied height to keep cards equal */}
                <div className="card-chips" aria-hidden>
                  {renderChips(p.technologies)}
                </div>

                {/* footer: live button optional, repo optional */}
                <div className="card-footer" style={{ marginTop: 8 }}>
                  {p.links?.live ? (
                    <a
                      className="btn"
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View
                    </a>
                  ) : (
                    <span className="btn disabled" aria-disabled="true" onClick={(e) => e.stopPropagation()}>
                      View
                    </span>
                  )}

                  {p.links?.repo ? (
                    <a
                      className="btn ghost"
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* modal */}
      {open && active && (
        <div
          className="modal open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal-card" role="document">
            <div className="modal-header">
              <div>
                <h2 id="modal-title" className="modal-title">
                  {active.name}
                </h2>
                <div id="modal-role" className="modal-role">
                  {active.role}
                </div>
              </div>
              <div>
                <button className="close-btn" aria-label="Close" onClick={closeModal}>
                  ✕
                </button>
              </div>
            </div>

            <div className="modal-body" id="modal-body" tabIndex={0}>
              <div style={{ marginBottom: 12 }}>
                {active.images && active.images.length > 0 ? (
                  <div style={{ position: "relative" }}>
                    <img
                      src={active.images[imgIndex]}
                      alt={`${active.name} ${imgIndex + 1}`}
                      style={{ width: "100%", maxHeight: 360, objectFit: "contain", borderRadius: 8 }}
                      loading="lazy"
                    />
                    {active.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="ctrl"
                          style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}
                          aria-label="Previous"
                        >
                          ◀
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="ctrl"
                          style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
                          aria-label="Next"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="carousel-placeholder" style={{ borderRadius: 8 }}>
                    <strong>{active.name}</strong>
                  </div>
                )}
              </div>

              <p>{active.longDescription || active.description}</p>

              <h4 style={{ marginTop: 12 }}>Responsibilities</h4>
              <ul>
                {active.responsibilities?.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>

              <h4>Technologies</h4>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                {active.technologies?.map((t, i) => (
                  <span className="chip" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-actions" style={{ marginTop: 18 }}>
                {active.links?.live ? (
                  <a className="btn" href={active.links.live} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                ) : (
                  <span className="btn disabled" aria-disabled="true">Live demo</span>
                )}
                {active.links?.repo ? (
                  <a className="btn ghost" href={active.links.repo} target="_blank" rel="noreferrer">
                    View code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
