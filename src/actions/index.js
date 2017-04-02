export const generateRandomNumber = () => ({
  type: 'GENERATE_RANDOM_NUMBER'
})

export const submitAnswer = (userGuess) => ({
  type: 'SUBMIT_ANSWER',
  userGuess
})

export const displayFeedback = (displayMessage) => ({
  type: 'DISPLAY_FEEDBACK',
  displayMessage
})
export const divToggle = () => ({
  type: 'TOGGLE_DIV',
})
export const leastGuesses = () => ({
  type: 'LEAST_GUESSES'
})
export const loadGuesses = (attempts) => ({
  type: 'LOAD_GUESSES',
  attempts
})
export const getGuesses = () => dispatch => {

  fetch('http://localhost:8080/attempts')
  .then(response => response.json())
  .then(json => dispatch(loadGuesses(json.attempts)))
  .catch(ex => console.log('parsing failed', ex))
}

export const guessCount = () => ({
  type: 'GUESS_COUNT'
})
