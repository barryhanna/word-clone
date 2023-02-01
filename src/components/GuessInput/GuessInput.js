import React from 'react';

const GuessInput = () => {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
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
