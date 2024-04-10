import { Link } from "react-router-dom"

function Navbar() {
  
    return (
      <>
        <Link to={``}>Homepage</Link>
        <Link to={`/shop`}>Shop</Link>
        <Link to={`/cart`}>Cart</Link>
      </>
    )
  }
  
  export default Navbar