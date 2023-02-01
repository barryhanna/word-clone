import React from 'react';
import { range } from '../../utils';

const Guess = ({ word = '' }) => {
  return (
    <p key={word} className="guess">
      {range(5).map((i) => (
        <span className="cell" key={`${word[i]}-${i}`}>
          {word[i]}
        </span>
      ))}
    </p>
  );
};

export default Guess;
