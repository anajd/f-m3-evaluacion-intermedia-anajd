import React from 'react';
import './App.scss';
import PokeList from './Components/PokeList';
import { PokemonArray } from './Components/PokemonArray';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }
  
  componentDidMount() {
    this.getPokemon()
  }

  getPokemon({

  })

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de Pokemon</h1>
        {pokemon.map(item => (
          <PokeList
            key={item.id}
            url={item.url}
            name={item.name}
            types={item.types}
          />
        ))}
      </div>
    );
  }
}

export default App;
