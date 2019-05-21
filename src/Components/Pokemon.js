import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <div className="card">
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
  id: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};

export default Pokemon;
