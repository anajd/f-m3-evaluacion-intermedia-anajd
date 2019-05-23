import React from 'react';
import PropTypes from 'prop-types';
//import PokeballFav from '../Images/pokeballFav.png';

class Pokemon extends React.Component {
  render() {
    const { id, url, name, types, favPokemon, handleFav } = this.props;
    return (
      <div
        className={`card ${favPokemon.includes(id) ? 'fav' : ''}`}
        id={id}
        onClick={handleFav}
      >
        <div className="card__img--container">
          <img className="card__img" src={url} alt={name} />
        </div>
        <h2 className="card__name">{name}</h2>
        <ul className="card__types">
          {types.map((types, typesIndex) => (
            <li className="type__item" key={typesIndex}>
              {types}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  favPokemon: PropTypes.array,
  handleFav: PropTypes.func
};

export default Pokemon;
