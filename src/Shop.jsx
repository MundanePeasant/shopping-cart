import { useOutletContext } from 'react-router-dom';
import Card from './Card';
import './Shop.css';

function Shop() {
  const [pokemonList, addToCart] = useOutletContext();

  return (
    <div className="shop">
      <div className="card-container">
        {pokemonList.map(pokemon => (
          <Card pokemon={pokemon} key={pokemon.name} onClick={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
