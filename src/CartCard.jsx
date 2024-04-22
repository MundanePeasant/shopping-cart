import './CartCard.css';

function CartCard({ cart }) {
  const cartList = cart;
  console.log(cartList);

  return (
    <>
      {cartList.map(pokemon => (
        <div key={pokemon.name} className="cart-card">
          <img src={pokemon.img} alt={pokemon.name} />
          <div>{pokemon.name}</div>
          <div>{pokemon.count}</div>
          <div>{pokemon.cost}</div>
        </div>
      ))}
    </>
  );
}

export default CartCard;
