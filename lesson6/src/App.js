import './App.css';
import React, { useEffect, useState } from 'react';
import PokemonPage from './pages/pokemonPage/PokemonPage';
import Register from './components/register/Register';


function App() {
   

    return (
        <div className="App">
            {/* <PokemonPage/> */}
            <Register/>
        </div>
    );
}


export default App;
