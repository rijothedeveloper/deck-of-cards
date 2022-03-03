import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import CardButton from "./CardButton"

const Deck = () => {
    const[cards, setCards] = useState([])
    const deckId = useRef(0)
  
    useEffect( () => {
      async function setupCards() {
        const response = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        deckId.current = response.data.deck_id;
        drawCard()
      }
  
      setupCards()
  
    }, [])

    const drawCard = async () => {
      const card_response = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=2`);
      const card = card_response.data.cards[0];
      addCard(card)
    }
    
    const addCard = (card) => setCards([...cards, card])
    
    const cardUI = cards.map( (card) => <Card imgUrl={card.image} />)
  
    return (
      <div className="App">
        <CardButton drawCard={drawCard} />
        {cardUI}
      </div>
    );
  }
  
  export default Deck;
  