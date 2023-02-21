import "./App.css";
import Cards from "./component/cards/Cards";
import Cart from "./component/cart/Cart";
import { useState } from "react";
import Provider from "./contexts/Provider";
import { Drawer, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  const [cards, setCards] = useState([
    { id: 1, name: "guy1", quantity: 0 },
    { id: 2, name: "guy2", quantity: 0 },
    { id: 3, name: "guy3", quantity: 0 },
    { id: 4, name: "guy4", quantity: 0 },
    { id: 5, name: "guy5", quantity: 0 },
    { id: 6, name: "guy6", quantity: 0 },
    { id: 7, name: "guy7", quantity: 0 },
    { id: 8, name: "guy8", quantity: 0 },
    { id: 9, name: "guy9", quantity: 0 },
    { id: 10, name: "guy10", quantity: 0 },
  ]);
  const [cartCards, setCartCards] = useState([]);
  const [isShow, setIsShow] = useState(false);

  function add(card) {
    const foundCard = cartCards.find((item) => item.id === card.id);
    if (foundCard) {
      setCartCards(
        cartCards.map((item) =>
          item.id === card.id
            ? { ...foundCard, quantity: foundCard.quantity + 1 }
            : item
        )
      );
      setCards(
        cards.map((item) =>
          item.id === card.id ? { ...card, quantity: card.quantity + 1 } : item
        )
      );
    } else {
      setCartCards([...cartCards, { ...card, quantity: card.quantity + 1 }]);
      setCards(
        cards.map((item) =>
          item.id === card.id ? { ...card, quantity: 1 } : item
        )
      );
    }
  }

  function remove(card) {
    const foundCard = cartCards.find((item) => item.id === card.id);
    if (foundCard.quantity === 1) {
      const items = cartCards.filter((item) => item.id !== card.id);
      setCartCards(items);
      setCards(
        cards.map((item) =>
          item.id === card.id ? { ...card, quantity: 0 } : item
        )
      );
    } else {
      if (foundCard.quantity !== 0) {
        setCartCards(
          cartCards.map((item) =>
            item.id === card.id
              ? { ...foundCard, quantity: foundCard.quantity - 1 }
              : item
          )
        );
        setCards(
          cards.map((item) =>
            item.id === card.id
              ? { ...card, quantity: card.quantity - 1 }
              : item
          )
        );
      }
    }
  }

  return (
    <Provider.Provider value={{ add, remove }}>
      <div>
        {" "}
        <IconButton onClick={() => setIsShow(true)}>
          <ShoppingCartIcon />
        </IconButton>
      </div>
      <div>
        <Drawer
          anchor="right"
          open={isShow}
          onClose={() => setIsShow(false)}
          PaperProps={{
            sx: {
              width: 600,
            },
          }}
        >
          <h1>Cart</h1>
          <Cart cart={cartCards} />
        </Drawer>
      </div>
      <div>
        <Cards card={cards} />
      </div>
    </Provider.Provider>
  );
}

export default App;
