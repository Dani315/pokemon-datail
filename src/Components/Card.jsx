import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/Card.css';

function Card(props) {
  const { pokemon } = props;
  return (
    <>
      <Link to={`/Pokemon/${pokemon}/PrintPokemon`}>
        <td className="tdStyle">
          <div className="card sizeCard">
            <div className="card-body letter sizeLetter">
              <strong>{pokemon}</strong>
            </div>
          </div>
        </td>
      </Link>
    </>
  );
}

Card.propTypes = {
  pokemon: PropTypes.string.isRequired,
};

export default Card;
