import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
// Setup
import { createBoard } from "./setup";
import { shuffleArray } from "./utils";
// Types
import { CardType } from "./setup";
// Styles
import { Wrap, Heading, Button, Grid } from "./App.styles";

const App = () => {
  // State hooks
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  // Effect hook for all matched cards, game won
  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log("Game Won");
      setGameWon(true);
    }
  }, [matchedPairs]);

  // Function for resetting the game
  const refreshGame = () => {
    setClickedCard(undefined);
    setCards(shuffleArray(createBoard()));
  };

  // Function for clicking the cards
  const handleCardClick = (currentClickedCard: CardType) => {
    // Clikc to flip the card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );

    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // If it's not a matched pair,
    // wait one second and flip them back
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1500);

    setClickedCard(undefined);
  };

  return (
    <Wrap>
      <Heading>Charachter Match</Heading>
      <Button onClick={refreshGame}>New Game</Button>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </Wrap>
  );
};

export default App;
