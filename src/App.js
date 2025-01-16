
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/contact';
import TechnologiesSection from './components/technologies';
import Project from './components/Project';
import Experience from './components/Experience';
import PageNotFount from './components/PageNotFound';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <BrowserRouter>
      <ScrollToTop/>
      <Header />
      
      <Routes>
      <Route path='/' element= {<HeroSection/>}/>
      <Route path='/About' element= {<About/>}/>
      <Route path='/Contact' element= {<Contact/>}/>
      <Route path='/technologies' element= {<TechnologiesSection/>}/>
      <Route path='/Projects' element= {<Project/>}/>
      <Route path='/experience' element= {<Experience/>}/>
      <Route path='/*' element= {<PageNotFount/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
