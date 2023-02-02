import React from 'react';

const GuessInput = ({ addGuess }) => {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters. ');
      return;
    }
    addGuess((prevGuesses) => [...prevGuesses, guess]);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={guess}
        type="text"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
