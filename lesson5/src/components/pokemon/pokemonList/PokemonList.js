import React, { useEffect, useState } from "react";
import PokemonCard from "../pokemoCard/PokemonCard";
import classes from "./PokemonList.module.scss";

const PokemonList = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=21";
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <div className={classes.pokemonList}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <div className={classes.filtr}>
        <button className={classes.btns}>Prev</button>
        <input type="number" className={classes.input} />
        <button className={classes.btns}>Next</button>
      </div>
    </>
  );
};

export default PokemonList;
