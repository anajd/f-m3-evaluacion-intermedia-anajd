import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const { pokemon, favPokemon, handleFav } = this.props;
    return (
      <ul className="pokelist">
        {pokemon.map(item => (
          <li className="pokelist__item" key={item.id}>
            <Pokemon
              url={item.url}
              name={item.name}
              types={item.types}
              favPokemon={favPokemon}
              id={item.id}
              handleFav={handleFav}
            />
          </li>
        ))}
      </ul>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.array,
  favPokemon: PropTypes.array,
  handleFav: PropTypes.func
};
export default PokeList;
