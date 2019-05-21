import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <li className="pokelist__item">
        <div className="pokelist__li">
          <img className="pokelist__img" src={url} alt={name} />
          <h2 className="pokelist__name">{name}</h2>
          <ul className="pokeList__types">
            {types.map((types, typesIndex) => (
              <li className="type__item" key={typesIndex}>
                {types}
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};

export default Pokemon;
