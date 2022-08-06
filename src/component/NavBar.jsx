
const NavBar = () => {

    return (
      <header className={`header background--transparent`}>
        <div className="header-container">
      
          <div className="menu-button">
            <span>Menu</span>
          </div>
  
          <nav>
            <ul className="nav-container">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li className="products-item">
                <a href="/">
                  Productos <span className="arrow"></span>
                </a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </nav>
  
  
        </div>
      </header>
    );
  };
  
  export default NavBar;
  