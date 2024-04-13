import { Link } from 'react-router-dom';
import CartIcon from './components/CartIcon';
import EggIcon from './components/EggIcon';
import HomeIcon from './components/HomeIcon';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div>
        <Link to={``}>
          <HomeIcon />
        </Link>
        <Link to={`/shop`}>
          <EggIcon />
        </Link>
        <Link to={`/cart`}>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
