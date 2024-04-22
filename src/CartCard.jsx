import './CartCard.css';

function CartCard({ cart }) {
  const cartList = cart;
  console.log(cartList);

  return (
    <>
      {cartList.map(pokemon => (
        <div key={pokemon.name} className="cart-card">
          <img src={pokemon.img} alt={pokemon.name} />
          <div className="name">{pokemon.name.toUpperCase()}</div>
          <div className='count'>
            <button className="inc-dec">+</button>
            <div>{pokemon.count}</div>
            <button className="inc-dec">-</button>
          </div>

          <div>{pokemon.cost * pokemon.count}</div>
          <button>X</button>
        </div>
      ))}
    </>
  );
}

export default CartCard;
