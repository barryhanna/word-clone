import React from 'react';
import { range } from '../../utils';
import { checkGuess, hasWonGame } from '../../game-helpers';

const Guess = ({ word = '', correctWord, setGameOver, setHasWon }) => {
  const result = checkGuess(word, correctWord);
  const hasWon = hasWonGame(word, correctWord);

  if (hasWon) {
    setHasWon(true);
    setGameOver(true);
  }

  return (
    <p className="guess">
      {range(5).map((_, i) => {
        let status = '';
        if (result) {
          status = result[i]?.status || '';
        }
        return (
          <span className={`cell ${status}`} key={`${word[i]}-${i}`}>
            {word[i]}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
