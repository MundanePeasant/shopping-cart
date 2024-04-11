import { Link } from "react-router-dom";
import CartIcon from "./components/CartIcon";
import EggIcon from "./components/EggIcon";
import HomeIcon from "./components/HomeIcon";

function Navbar() {
    return (
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
    )
}

export default Navbar