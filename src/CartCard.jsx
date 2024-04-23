import './CartCard.css';
import MoneyIcon from './components/MoneyIcon';

function CartCard({ cart, editCart, deleteFromCart }) {
  const cartList = cart;
  console.log(cartList);

  return (
    <>
      {cartList.map(pokemon => (
        <div key={pokemon.name} className="cart-card">
          <img src={pokemon.img} alt={pokemon.name} />
          <div className="name">{pokemon.name.toUpperCase()}</div>
          <div className="count">
            <button
              className="inc-dec"
              onClick={() => editCart(pokemon, pokemon.count + 1)}
            >
              +
            </button>
            <div>{pokemon.count}</div>
            <button
              className="inc-dec"
              onClick={() => editCart(pokemon, pokemon.count - 1)}
            >
              -
            </button>
          </div>
          <div>
            <MoneyIcon />
            <div>{pokemon.cost * pokemon.count}</div>
          </div>

          <button onClick={() => deleteFromCart(pokemon)}>X</button>
        </div>
      ))}
    </>
  );
}

export default CartCard;
