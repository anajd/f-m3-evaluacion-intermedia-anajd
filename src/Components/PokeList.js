import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const { id, url, name, types } = this.props;
    return (
      <ul className="pokelist">
        <Pokemon id={id} url={url} name={name} types={types} />
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
