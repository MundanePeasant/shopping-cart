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
    for (let i = 0; i <= 30; i += 1) {
      fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}`, { mode: 'cors' })
        .then(response => {
          if (response.status >= 400) {
            throw new Error('server error');
          }
          return response.json();
        })
        .then(response => {
          const foundName = response.chain.species.name;
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
                  const baseStats =
                    parseInt(pokemonJSON['stats']['0']['base_stat']) +
                    parseInt(pokemonJSON['stats']['1']['base_stat']) +
                    parseInt(pokemonJSON['stats']['2']['base_stat']) +
                    parseInt(pokemonJSON['stats']['3']['base_stat']) +
                    parseInt(pokemonJSON['stats']['4']['base_stat']) +
                    parseInt(pokemonJSON['stats']['5']['base_stat']);

                  const pokemon = new Pokemon(
                    name,
                    imageURL,
                    weight,
                    baseStats,
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
    console.log(pokemonList);
  }, []);

  return { pokemonList, error, loading };
};

function App() {
  //Calling Pokemon API and receiving the first N amount of pokemon which hatch from eggs (aka not yet evolved)
  const { pokemonList, error, loading } = usePokemonFetch();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
