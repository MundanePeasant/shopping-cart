import { Link } from 'react-router-dom';
import CartIcon from './components/CartIcon';
import EggIcon from './components/EggIcon';
import HomeIcon from './components/HomeIcon';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <img
        src="./src/assets/egglogo.png"
        alt="an unhatched pokemon egg"
        className="logo"
      />
      <Link className="nav-item" to={``}>
        <HomeIcon />
        <div>Home</div>
      </Link>
      <Link className="nav-item" to={`/shop`}>
        <EggIcon />
        <div>Shop</div>
      </Link>
      <Link className="nav-item" to={`/cart`}>
        <CartIcon />
        <div>Cart</div>
      </Link>
    </div>
  );
}

export default Navbar;
