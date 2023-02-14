import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <nav className="navbar">
    <div className="logo">
      <a href="./index.html"><img className="logo" src="" alt="" /></a>
    </div>

    <ul className="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

      <div className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link>About</Link></li>
        <li><a href="#">Contact</a></li>
      </div>
    </ul>
  </nav>
  );
}

export default Header;
