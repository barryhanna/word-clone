import React from 'react';

const GuessResults = ({ results }) => {
  return (
    <div className="guess-results">
      {results.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
