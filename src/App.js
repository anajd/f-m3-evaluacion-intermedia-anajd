import React from 'react';
import './App.scss';
import PokeList from './Components/PokeList';
import { pokemonArray } from './data/PokemonArray';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      favPokemon: []
    };
    this.handleFav = this.handleFav.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    this.setState({
      pokemon: pokemonArray
    });
  }

  handleFav(event, obj) {
    const id = parseInt(event.currentTarget.id);
    const newFav = [...this.state.favPokemon];
    let index = newFav.indexOf(obj);
    if (this.state.favPokemon.includes(id) === true) {
      newFav.splice(index, 1);
    } else {
      newFav.push(id);
    }
    this.setState({
      favPokemon: newFav
    });
  }

  render() {
    const { pokemon, favPokemon } = this.state;
    return (
      <div className="App">
        <header className="App_header">
          <h1 className="App__title">Mi lista de Pokémon</h1>
        </header>
        <div className="wrapper">
          <PokeList
            pokemon={pokemon}
            favPokemon={favPokemon}
            handleFav={this.handleFav}
          />
        </div>
      </div>
    );
  }
}

export default App;
