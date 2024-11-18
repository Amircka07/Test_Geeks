import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import  classes  from "./PokemonList.module.scss"

const PokemonList = ({pokemonList}) => {
    return (
        <div>
            <h1 className={classes.h1}>Pokemon</h1>
            <div className={classes.pokemonList}>
                {
                    pokemonList.map(pokemon=><Pokemon pokemon={pokemon}/> )
                }
            </div>
            <div className={classes.filtr}>
                <button className={classes.btns}>Prev</button>
                <input type="number" className={classes.input} />
                <button className={classes.btns}>Next</button>
            </div>
        </div>
    );
};

export default PokemonList;