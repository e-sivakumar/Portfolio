import "../styles/Header.css";
import { useState, useEffect } from "react";
import TopLeftPic from "../images/siva1.jpeg"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState();
  const [hoverTab, setHoverTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 1000);
  const location = useLocation();

  useEffect(() => {
    
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 1000);
    };

  
const topLeftImage = document.getElementById('TopLeft');

topLeftImage.addEventListener('click', () => {
  topLeftImage.classList.toggle('flipped'); // Add or remove the 'flipped' class on click
});

    window.addEventListener("resize", handleResize);
    return ()=>{window.removeEventListener("resize", handleResize);}
  }, []);

  useEffect(() => {
    const pathToTab = {
      "/": "Home",
      "/about": "About",
      "/technologies": "Technologies",
      "/projects": "Projects",
      "/experience": "Experience",
      "/contact": "Contact",
    };

    const currentTab = pathToTab[location.pathname] || "Home";
    setActiveTab(currentTab);
  }, [location]);

  const tabs = ["Home", "About", "Technologies", "Projects", "Experience", "Contact"];

  return (
    <div id="mainHeader">
      <div id="headerContainer">

        {/* <h1 id="headerTitle"><span>P</span>itch<span>D</span>eck</h1> */}

        <img src={TopLeftPic} id="TopLeft" alt="Flipping" />


        {window.innerWidth <= 1000 && (
          <div id="hamburgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}

        <ul
          id="menuList"
          style={{
            display: menuOpen ? "flex" : "none",
          }}
        >
          {tabs.map((tab) => (
            <li
            ><Link
            style={{
              margin: "0 10px",
              cursor: "pointer",
              padding: "10px",
              color: activeTab === tab ? "aqua" : "white",
              textDecoration: "none",
              boxShadow: activeTab === tab ? "2px 3px 4px #61DBFB" : ( hoverTab === tab ? "1px 2px 3px white" : "none"),
              borderRadius:  "10px" ,
              transition: "box-shadow 0.5s ease-in-out 0.1s",
              border: activeTab !== tab ? "10px white" : "2px white"
            }}
            onClick={() => {
              setActiveTab(tab);
              setMenuOpen(window.innerWidth > 1000 ? true : false);
            }} to={tab === "Home" ? "/" : `/${tab.toLowerCase()}`} 
            onMouseOver={()=>{
              setHoverTab(tab)
            }}
            onMouseOut={()=>{
              setHoverTab("")
            }}
            >
              {tab}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

