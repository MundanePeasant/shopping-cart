import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Pokemon from './pokemon';

//might be able to put router within this component
//call pokemon api with https://pokeapi.co/api/v2/evolution-chain/{id}/ and receive back a species with another link to call API with

const usePokemonFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const pokemonSet = new Set();

  useEffect(() => {
    for (let i = 1; i <= 30; i += 1) {
      //first fetch to find the first evolutionary pokemon in their respective chains
      fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}`, { mode: 'cors' })
        .then(response => {
          if (response.status >= 400) {
            throw new Error('server error');
          }
          return response.json();
        })
        .then(response => {
          const foundName = response.chain.species.name;

          //checks if the pokemon is already been called, if not, moves on to another fetch to get more data
          if (!pokemonSet.has(foundName)) {
            pokemonSet.add(foundName);

            const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${foundName}`;
            fetch(pokemonURL, { mode: 'cors' }).then(pokemonResponse =>
              pokemonResponse
                .json()
                .then(pokemonJSON => {
                  const name = pokemonJSON['name'];
                  const imageURL = pokemonJSON['sprites']['front_default'];
                  const weight = pokemonJSON['weight'];
                  const hp = parseInt(pokemonJSON['stats']['0']['base_stat']);
                  const att = parseInt(pokemonJSON['stats']['1']['base_stat']);
                  const def = parseInt(pokemonJSON['stats']['2']['base_stat']);
                  const specAtt = parseInt(
                    pokemonJSON['stats']['3']['base_stat'],
                  );
                  const specDef = parseInt(
                    pokemonJSON['stats']['4']['base_stat'],
                  );
                  const speed = parseInt(
                    pokemonJSON['stats']['5']['base_stat'],
                  );

                  //initiates a new Pokemon object and then updates the Pokemon List state
                  const pokemon = new Pokemon(
                    name,
                    imageURL,
                    weight,
                    hp,
                    att,
                    def,
                    specAtt,
                    specDef,
                    speed,
                  );

                  setPokemonList(pokemonList => [...pokemonList, pokemon]);
                })
                .catch(error => {
                  setError(error);
                  throw error;
                }),
            );
          }
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return { pokemonList, error, loading };
};

function App() {
  //Calling Pokemon API and receiving the first N amount of pokemon which hatch from eggs (aka not yet evolved)
  const { pokemonList, error, loading } = usePokemonFetch();
  //State to store what is in the cart & its count
  const [cart, setCart] = useState([]);

  function addToCart(key, val) {
    //check if the pokemon is already in the array. If yes, then add the count to the value present
    if (cart.some(pokemon => pokemon.name === key)) {
      const updatedCart = cart.map(pokemon => {
        if (pokemon.name === key) {
          return { ...pokemon, count: pokemon.count + val };
        }
      });
      setCart(updatedCart);
    } else {
      const newAddition = { name: key, count: val };
      setCart([...cart, newAddition]);
    }
  }

  if (error)
    return (
      <div>
        <Navbar />
        <p>A network error was encountered</p>
      </div>
    );
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Outlet context={[pokemonList, addToCart, cart]} />
    </>
  );
}

export default App;
