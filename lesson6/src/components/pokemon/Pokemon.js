import React, { useEffect, useState } from 'react';
import ModalPokemon from '../modalPokemon/Modal';
import classes from './Pokemon.module.scss';

const Pokemon = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchPokemon = async () => {
        try {
            const response = await fetch(pokemon.url);
            return await response.json();
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon().then((data) => setPokemonDetails(data));
    }, []);

    const handleShow = () => {
        setShow((prev) => !prev);
    };

    return (
        <div className={classes.pokemonCards}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <img
                        src={pokemonDetails.sprites?.other?.dream_world?.front_default}
                        alt={pokemon.name}
                        className={classes.image}
                    />
                    <h3>{pokemon.name}</h3>
                    <button onClick={handleShow} className={classes.btn}>
                        Подробнее
                    </button>
                </div>
            )}
            {show && (
                <ModalPokemon handleShow={handleShow}>
                    <img
                        src={pokemonDetails.sprites?.other?.dream_world?.front_default}
                        alt={pokemon.name}
                        className={classes.img}
                    />
                    <h2>{pokemon.name}</h2>
                    <div className={classes.description}>
                        <div className={classes.abilities}>
                            <strong>Abilities:</strong>{' '}
                            {pokemonDetails.abilities
                                ?.map((value) => value.ability.name)
                                .join(', ')}
                        </div>
                        <div className={classes.moves}>
                            <strong>Some moves:</strong>{' '}
                            {pokemonDetails.moves
                                ?.slice(0, 5)
                                .map((value) => value.move.name)
                                .join(', ')}
                        </div>
                    </div>
                </ModalPokemon>
            )}
        </div>
    );
};

export default Pokemon;
