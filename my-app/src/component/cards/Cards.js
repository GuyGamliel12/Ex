import React from "react";
import Card from "../card/Card";
import "./Cards.css"
function Cards(cardLists) {
    const cardsCart = cardLists.card.map((item) => (
        <Card proprety = {item} key= {item.id}/>
    ))
    return <section className="Cards"> {cardsCart} </section>
;
  }
  
  export default Cards;