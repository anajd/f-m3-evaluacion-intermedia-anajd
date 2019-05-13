import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, url, name, types } = this.props;
    return (
      <div className="pokelist__item">
        <li className="pokelist__li" key={id}>
          <img className="pokelist__img" src={url} alt={name} />
          <h2 className="pokelist__name">{name}</h2>
          <ol className="pokeList__types">{types}</ol>
        </li>
      </div>
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
