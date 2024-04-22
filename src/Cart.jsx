import { useOutletContext } from 'react-router-dom';
import CartCard from './CartCard';
import './Cart.css';

function Cart() {
  const [pokemonList, addToCart, cart] = useOutletContext();

  return (
    <div className='cart'>
      <CartCard cart={cart} />
    </div>
  );
}

export default Cart;
