import './Card.css';
import React, { useContext } from 'react';
import Provider from '../../contexts/Provider';
function Card(card) {

   const {add , remove} = useContext(Provider)
    return <div className="Warpper">
        <h1> {card.proprety.name} </h1>
            <div>
            <button onClick={() => add(card.proprety)}>+</button>
            {card.proprety.quantity}
            <button onClick={() => remove(card.proprety)}>-</button>
            </div>
    </div>
;
  }
  
  export default Card;