import TodoPage from "./pages/TodoPage";
import "./App.css";
import UserPage from "./pages/userPage/UserPage";
import PokemonList from "./components/pokemon/pokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      {/* <UserPage /> */}
      <PokemonList />
      {/* <TodoPage /> */}
    </div>
  );
}

export default App;
