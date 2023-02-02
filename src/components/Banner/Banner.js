import React from 'react';

const Banner = ({ status = 'happy', guesses = 0, correctWord = '' }) => {
  return (
    <div className={`${status} banner`}>
      {status === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {' '}
            {guesses.length} {guesses.length === 1 ? ' guess' : 'guesses'}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{correctWord}</strong>.
        </p>
      )}
    </div>
  );
};

export default Banner;
