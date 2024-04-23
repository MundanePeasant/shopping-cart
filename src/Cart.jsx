import { useOutletContext } from 'react-router-dom';
import CartCard from './CartCard';
import './Cart.css';

function Cart() {
  const [pokemonList, addToCart, cart, editCart, deleteFromCart] = useOutletContext();

  return (
    <div className='cart'>
      <CartCard cart={cart} editCart = {editCart} deleteFromCart = {deleteFromCart} />
    </div>
  );
}

export default Cart;
