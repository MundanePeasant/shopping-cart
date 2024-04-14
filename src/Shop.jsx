import { useOutletContext } from 'react-router-dom';
import Card from './Card';

function Shop() {
  const pokemonList = useOutletContext();

  return (
    <>
      <h2>This is the Shop</h2>
      {pokemonList.map(pokemon => (
        <Card pokemon={pokemon} key={pokemon.name} />
      ))}
    </>
  );
}

export default Shop;
