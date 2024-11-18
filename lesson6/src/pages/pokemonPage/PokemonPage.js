import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/pokemonList/PokemonList';
import pokemon from '../../components/pokemon/Pokemon';
import Register from '../../components/register/Register';
import classes from './PokemonPage.module.scss'

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    const fetchPokemons = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        return await response.json();
    };
    useEffect(() => {
        fetchPokemons().then(data=> setPokemonList(data.results))
    }, []);

    // const [isVisible, setIsVisible] = useState(false);
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         setIsVisible(true)
    //     }, 5000)
    //     return ()=> clearTimeout(timer)
    // },[])

    return (
    <> 
         <div> 
            <div className={classes.reg}>
            {/* {
                isVisible && 
                <>
                    <Register setIsVisible={setIsVisible}/>
                </>
            } */}
            </div>
            <PokemonList pokemonList={pokemonList}/>
        </div>
        {/* <Register/> */}
    </>
        
    );
};

export default PokemonPage;