import './App.css';
import Home from '../src/componentes/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/componentes/NavBar';
import About from '../src/componentes/About';
import Skill from '../src/componentes/Skill';
import Projects from '../src/componentes/Projects';
import Certificates from '../src/componentes/Certificates';
import Contact from '../src/componentes/Contact';


function App() {
  
  return (
    
      <div className='App'>
        <NavBar />
        
        <HashRouter>        
        <Routes>
        <Route
            path = "/"
            element = {<Home/>}            
          />
          <Route
            path = "/about"
            element = {<About/>}            
          />     
          <Route
            path = "/skill"
            element = {<Skill/>}            
          /> 
          <Route
            path = "/projects"
            element = {<Projects/>}            
          />      
          <Route
            path = "/certificates"
            element = {<Certificates/>}            
          /> 
          <Route
            path = "/contact"
            element = {<Contact/>}            
          /> 
                   
        </Routes>      
      </HashRouter>
      </div>
      
    
  )
}

export default App
