import './Cart.css';
import React from 'react';
import Card from '../card/Card';
function Cart(cardLists) {

   const cards = cardLists.cart.map((item) => (
        <Card proprety = {item} key= {item.id}/>
    ))
    return <section className="CartCards">{cards}</section>
;
  }
  
  export default Cart;