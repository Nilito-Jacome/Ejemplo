import './Navbar.css';

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
            
              <a href="/">Home</a>        
                                                              
                                                        
          </li>
        </ul>
      </div>
    );
};

export default NavBar;