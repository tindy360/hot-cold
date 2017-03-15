export const generateRandomNumber = () => ({
  type: 'GENERATE_RANDOM_NUMBER'
})

export const submitAnswer = (userGuess) => ({
  type: 'SUBMIT_ANSWER',
  userGuess
})
