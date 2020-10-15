import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';
import Grafic from './Grafic';

function PrintCardPokemon(props) {
  const abilities = [];
  const Moves = [];
  const { Pokemon } = props;

  for (let i = 0; i < Pokemon.abilities.length; i += 1) {
    abilities.push(
      <div className="card bg-light center">
        <h6>
          {Pokemon.abilities[i].ability.name}
        </h6>
      </div>,
    );
  }

  for (let u = 0; u < Pokemon.moves.length; u += 1) {
        Moves.push(
            <div className="card bg-light center">
                <h6>{Pokemon.moves[u].move.name}</h6>
            </div>);
         }
         
    
    return(
        <>

    <div className="card-columns">
        <div className="card CardPokemon">
            <div className="card-header ">
                 <h3 className="letter"><strong>{Pokemon.forms[0].name.toUpperCase()}</strong></h3>
                <img className="image" src={Pokemon.sprites.front_default} alt="Logo Pokemon"/> 
            </div>
            <div className="card-body">

            <tr className="trStyle1">

                 <td className="tdStyle1" ><h6><strong>EXP: {Pokemon.base_experience}</strong></h6></td>
                 <td className="tdStyle1"><h6><strong>HEIGHT: {Pokemon.height}</strong></h6></td>
                <td className="tdStyle1"><h6><strong>WEIGHT:{Pokemon.weight}</strong></h6></td>
                    
             </tr>
        </div>
    </div>
     
        <div className="card CardMoves">
           <div className="card-header">
              <h3>Moves</h3>
           </div>
           <div className="card-body">
              <div className="card-columns">
                         {Moves}
             </div>
           </div>
        </div>
        <div className="card CardAbilities">
            <div className="card-header">
               <h3>Abilities</h3>
            </div>
            <div className="card-body">
                  <div className="card-columns">
                         {abilities}
                  </div>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <Grafic stats={Pokemon.stats} />
            </div>
        </div>
        </div>   
    </>
    )
}

PrintCardPokemon.propTypes = {
  Pokemon: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PrintCardPokemon;
