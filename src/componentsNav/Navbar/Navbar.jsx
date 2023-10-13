import logo from '../../assets/logoBrand.svg';
import '../Navbar/Navbar.css';
import carritoDeCompras from '../../assets/carrito-de-compras.png' 
function CartWidget() {
  return (
    <div>
      <img src={carritoDeCompras} alt="Icono de carrito de compras" className="cart-icon" />
      <i className="fas fa-shopping-cart"></i> {}
      <span>5</span> {}
    </div>
  );
}


function Navbar() {
  return (
    <nav className='nav-width'>
      <div className="navbar-container">
        <div>
          <img src={logo} alt="Logo de la marca" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Work team</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
