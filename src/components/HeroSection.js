import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import logo from '../images/logoreact.webp'
import nodeLogo from 'C:/Users/SivakumarElango/Downloads/Node.js.png'
import photo from '../images/siva1.jpeg'

const HeroSection = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{setLoaded(true)}, 800)
  },[])
  return isLoaded ? (
    <div id='heroSection'>
      <div id='HeroCol'>
        <div className='column-1'>
          <h1 >
            Hi, I'm Sivakumar <br /><span>Node.js Developer</span>
          </h1>
          <div className='logoSection'>
            
            <img
              className='node'
              src={nodeLogo}
              alt="React Logo"
            />
            <img
              className='image-1'

              src={logo}
              alt="React Logo"
            />
          </div>
        </div>
        <div className='column-2'>
          <img
            className='image-2'
            src={photo}
            alt="image"
          />
        </div>
      </div>
    
    </div> 
  ) : (
    <div id='mainHero'>
      <div class="loader"></div>
    </div>
  )
};

export default HeroSection;
