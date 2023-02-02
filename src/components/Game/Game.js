import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [hasWon, setHasWon] = React.useState(false);

  return (
    <>
      <GuessResults
        results={guesses}
        correctWord={answer}
        setGameOver={setGameOver}
        setHasWon={setHasWon}
      />
      <GuessInput addGuess={setGuesses} />
      {gameOver && hasWon && (
        <Banner status={hasWon ? 'happy' : 'sad'} guesses={guesses} />
      )}
      {guesses.length === NUM_OF_GUESSES_ALLOWED && !hasWon && (
        <Banner status={'sad'} guesses={guesses} correctWord={answer} />
      )}
    </>
  );
}

export default Game;
