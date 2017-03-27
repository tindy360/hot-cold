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
