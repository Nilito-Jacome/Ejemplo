import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Home from './componentes/Home';
import About from './componentes/About';
import Skill from './componentes/Skill';
import Projects from './componentes/Projects';
import Certificates from './componentes/Certificates';
//import Contact from './componentes/Contact';
//import Tecnology from './componentes/Tecnology';


function App() {
  

  return (
    <div className="App">
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
        </Routes>      
      </HashRouter>
  
    </div>
  );
}

export default App;
