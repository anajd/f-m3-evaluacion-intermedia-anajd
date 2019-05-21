import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <ul className="pokelist">
        {pokemon.map(item => (
          <li className="pokelist__item" key={item.id}>
            <Pokemon url={item.url} name={item.name} types={item.types} />
          </li>
        ))}
      </ul>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};
export default PokeList;
