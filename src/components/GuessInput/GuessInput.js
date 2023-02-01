import React from 'react';

const GuessInput = ({ addGuess }) => {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addGuess((prevGuesses) => [...prevGuesses, guess]);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        type="text"
        maxLength={5}
        minLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
