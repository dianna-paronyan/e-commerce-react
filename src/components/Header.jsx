import { Link } from "react-router-dom";
import { useCartItems } from "../Provider/CartProvider";
import "./Header.css";

function Header() {
  const { cart } = useCartItems();

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="">
          <img className="logo" src="/images/logo.webp" alt="" />
        </a>
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <Link to="/cartItems">
            <li>
              <img
                src="./images/shopping-cart.png"
                alt=""
                className="cart"
                id="myBtn"
              />
              <span className={cart?.length > 0 ? "count" : ""}>
                {cart.length > 0 && cart.length}
              </span>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
