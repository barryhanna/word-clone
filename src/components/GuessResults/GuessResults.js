import React from 'react';
import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

const GuessResults = ({ results }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={`${results[i]}-${i}`} word={results[i]} />
      ))}
    </div>
  );
};

export default GuessResults;