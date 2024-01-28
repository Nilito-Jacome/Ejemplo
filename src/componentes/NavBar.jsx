

const NavBar = () => {

    return (
      <div className="NavBar">
        <div className="saludo">
          <>
            <img className='icon_nav' src="./icon/etiqueta.png" alt="" />
          </>
          <div className="navbar-logo">Hola! Bievenido</div>
        </div>

        <ul className="navbar-links">
          <h1 className="menu">Menú</h1>
          <li id="Lista">
            
              <a href="/">Acerca</a>            
            
              <a href="#/skill">Habilidades</a>                
                        
              <a href="#/projects">Proyectos</a>
            
              <a href="#/certificates">Certificados</a>

              <a href="#/contact">Formulario</a>

              <a href="#/networks">Redes Sociales</a>
           
          </li>
        </ul>
      </div>
    );
};

export default NavBar;