import React from 'react';
import './App.scss';
import PokeList from './Components/PokeList';
import { pokemonArray } from './data/PokemonArray';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
      //favorite: []
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    this.setState({
      pokemon: pokemonArray
    });
  }

  // favPokemon(event) {
  //   const selectPokemon = parseInt(event.currentTarget.id);
  //   this.setState(prevState => {
  //   })
  // }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        <header className="App_header">
          <h1 className="App__title">Mi lista de Pokémon</h1>
        </header>
        <div className="wrapper">
          <PokeList pokemon={pokemon} />
        </div>
      </div>
    );
  }
}

export default App;
