import { useOutletContext } from 'react-router-dom';

function Cart() {
  const [pokemonList, addToCart, cart] = useOutletContext();
  console.log(cart);

  return (
    <>
      <h2>This is the Cart</h2>
      {cart.map(pokemon => (
        <div>{pokemon.name}</div>
      ))}
      ;
    </>
  );
}

export default Cart;
