import { Link } from "react-router-dom"
import HomeIcon from "./components/HomeIcon"
import EggIcon from "./components/EggIcon"
import CartIcon from "./components/CartIcon"

function Navbar() {
  
    return (
      <>
        <Link to={``}> 
          <HomeIcon /> 
        </Link>
        <Link to={`/shop`}>
          <EggIcon />
        </Link>
        <Link to={`/cart`}>
          <CartIcon />
        </Link>
      </>
    )
  }
  
  export default Navbar