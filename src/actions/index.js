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

export const GET_FEWEST_GUESSES = 'GET_FEWEST_GUESSES';
export const retreiveGueses = (newFewestGuesses, description) => ({
    type: GET_FEWEST_GUESSES,
    newFewestGuesses

});

export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
export const saveGuesses = (fewestGuesses, description) => ({
    type: SAVE_FEWEST_GUESSES,
    fewestGuesses

});
