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
export const resetCount = () =>  ({
  type: 'RESET_COUNT',
})
export const loadGuesses = (attempts) => ({
  type: 'LOAD_GUESSES',
  attempts
})
export const getGuesses = () => dispatch => {

  fetch('http://localhost:8080/attempts')
  .then(response => response.json())
  .then(json => dispatch(loadGuesses(json[0].attempts)))
  .catch(ex => console.log('parsing failed', ex))
}

export const guessCount = () => ({
  type: 'GUESS_COUNT'
})

export const sendAttempts = (attempts) => dispatch => {

  fetch('http://localhost:8080/attempts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    attempts: attempts,
      id: '58e0760ea4786b8b24e2dc07',
  })
})
  .then(response => response.json())
  .catch(ex => console.log('post failed', ex))
}
